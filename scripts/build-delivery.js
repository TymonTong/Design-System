/**
 * 交付包打包脚本
 * 运行：node scripts/build-delivery.js
 * 输出：public/设计规范交付包.zip
 *
 * 在 GitHub Actions 构建阶段自动运行，产物随 VitePress 一起部署到线上。
 * 本地项目不保留 ZIP，每次推送都重新生成，保证内容始终最新。
 */

import archiver from 'archiver'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root      = path.resolve(__dirname, '..')
const outPath   = path.resolve(root, 'public/设计规范交付包.zip')

// 确保 public 目录存在
fs.mkdirSync(path.resolve(root, 'public'), { recursive: true })

const output  = fs.createWriteStream(outPath)
const archive = archiver('zip', { zlib: { level: 9 } })

archive.on('error', err => { throw err })

output.on('close', () => {
  const kb = (archive.pointer() / 1024).toFixed(1)
  console.log(`[delivery] 交付包已生成：public/设计规范交付包.zip（${kb} KB）`)
})

archive.pipe(output)

// ── 0. 图片资源（组件直接依赖，解压即可使用）────────────────────
archive.directory(path.join(root, 'public/images'), 'public/images')

// ── 1. AI 规则 & 说明文档 ──────────────────────────────────────
archive.file(path.join(root, '.cursorrules'), { name: '.cursorrules' })
archive.file(path.join(root, 'README.md'),    { name: 'README.md' })

// ── 2. 主题样式 ────────────────────────────────────────────────
archive.file(path.join(root, 'public/el-plus-theme.css'), { name: 'el-plus-theme.css' })

// ── 3. 封装组件（4 个 Vue 文件）──────────────────────────────
const comps = ['AppSidebar', 'AppTopbar', 'AppFilter', 'AppStatCard']
comps.forEach(name => {
  archive.file(
    path.join(root, `.vitepress/theme/components/${name}.vue`),
    { name: `${name}.vue` }
  )
})

// ── 4. 基础规范文档 ────────────────────────────────────────────
;['colors', 'typography', 'spacing', 'border'].forEach(f => {
  archive.file(path.join(root, `${f}.md`), { name: `${f}.md` })
})

// ── 5. 封装组件说明文档 ────────────────────────────────────────
;['sidebar-instance', 'topbar-instance', 'filter-instance'].forEach(f => {
  archive.file(
    path.join(root, `instances/${f}.md`),
    { name: `instances/${f}.md` }
  )
})

// ── 6. Element Plus 组件规范文档（全部 md）────────────────────
const compDir = path.join(root, 'components')
fs.readdirSync(compDir)
  .filter(f => f.endsWith('.md'))
  .forEach(f => {
    archive.file(path.join(compDir, f), { name: `components/${f}` })
  })

archive.finalize()
