---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #ffffff
color: #202124
style: |
  section {
    font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans JP", sans-serif;
    padding: 38px 55px;
    font-size: 33px;
    line-height: 1.45;
    position: relative;
    background-color: #ffffff;
    color: #202124;
  }
  /* Google / GDG 4 色アクセントバー（スライド最上部） */
  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 7px;
    background: linear-gradient(to right, #4285F4 25%, #EA4335 25% 50%, #FBBC04 50% 75%, #34A853 75%);
  }
  h1 {
    color: #202124;
    font-size: 1.75em;
    margin-bottom: 0.3em;
    line-height: 1.25;
  }
  h2 {
    color: #1a73e8;
    font-size: 1.28em;
    border-bottom: 2px solid #e8f0fe;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 0.55em;
    position: relative;
  }
  h2::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: #1a73e8;
  }
  h3 {
    color: #5f6368;
    font-size: 0.95em;
  }
  footer {
    font-size: 0.55em;
    color: #5f6368;
  }
  strong {
    color: #174ea6;
    font-weight: 600;
  }
  table {
    font-size: 0.74em;
    width: 100%;
    margin-top: 8px;
    border-collapse: collapse;
    border: 1px solid #dadce0;
    border-radius: 8px;
    overflow: hidden;
  }
  section table th,
  th {
    background-color: #1a73e8 !important;
    color: #ffffff !important;
    padding: 8px 12px;
    border-bottom: 2px solid #174ea6;
    font-weight: 600;
  }
  section table th strong,
  th strong {
    color: #ffffff !important;
  }
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #dadce0;
    color: #202124;
  }
  code {
    background-color: #f1f3f4;
    color: #d93025;
    font-size: 0.88em;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre {
    font-size: 0.68em;
    background-color: #202124;
    color: #f8f9fa;
    padding: 12px 16px;
    border-radius: 8px;
    line-height: 1.4;
    margin-top: 10px;
    border: 1px solid #3c4043;
  }
  pre code {
    background-color: transparent;
    color: inherit;
    padding: 0;
  }
  ul {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }
  li {
    margin-bottom: 0.3em;
  }
  a {
    color: #1a73e8;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  /* 左右 2 カラムレイアウト */
  .split {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 10px;
  }
  .split .left {
    flex: 1.1;
  }
  .split .right {
    flex: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .photo-box {
    width: 100%;
    height: 380px;
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
  }
  .photo-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .photo-box.contain img {
    object-fit: contain;
    background-color: #f1f3f4;
  }
  .photo-box .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(32, 33, 36, 0.82);
    color: #ffffff;
    font-size: 0.50em;
    padding: 6px 10px;
    text-align: center;
    line-height: 1.25;
  }
  /* 写真2枚並び・グリッド用レイアウト */
  .photo-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    width: 100%;
    height: 380px;
  }
  .photo-grid-2 .photo-box {
    height: 100%;
  }
  /* コンパクトテキスト調整用 */
  .compact {
    font-size: 0.76em;
    line-height: 1.34;
  }
  .compact ul {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }
  .compact li {
    margin-bottom: 0.18em;
  }
  /* メッセージライン（各スライドのキーメッセージ統一スタイル） */
  .lead-msg {
    font-size: 1.0em;
    font-weight: 700;
    color: #174ea6;
    margin-top: 0;
    margin-bottom: 14px;
    line-height: 1.4;
  }
  .lead-msg strong {
    color: #174ea6;
    font-weight: 700;
  }
  /* 注釈用スタイル */
  .footnote {
    font-size: 0.55em !important;
    color: #5f6368 !important;
    margin-top: 8px;
    line-height: 1.35;
  }
  /* 自己紹介スライド (Slide 1) 専用レイアウト */
  .profile-layout {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    margin-top: 10px;
  }
  .profile-info {
    flex: 1.15;
    font-size: 0.82em;
    line-height: 1.45;
  }
  .profile-name {
    font-size: 1.18em;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 10px;
  }
  .profile-info ul {
    margin: 0;
    padding-left: 1.2em;
  }
  .profile-info li {
    margin-bottom: 0.35em;
  }
  .profile-side {
    flex: 0.85;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .profile-photo {
    width: 100%;
    height: 320px;
    background-color: #f1f3f4;
    border: 1px solid #dadce0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .profile-qr-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
    height: 175px;
  }
  .profile-qr-card img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
  /* インライン QR カード */
  .inline-qr-card {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    background-color: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 10px 16px;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
    margin-top: 24px;
  }
  .inline-qr-card img {
    width: 125px;
    height: 125px;
    object-fit: contain;
    display: block;
  }
  .inline-qr-card .qr-label {
    font-size: 0.78em;
    color: #202124;
    font-weight: 600;
    line-height: 1.4;
  }
  .demo-qr-card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 10px 14px;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
  }
  .demo-qr-card img {
    width: 100px !important;
    height: 100px !important;
    object-fit: contain;
    display: block;
  }
  .title-qr-box {
    position: absolute;
    bottom: 40px;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #dadce0;
    border-radius: 12px;
    padding: 8px 12px;
    box-shadow: 0 2px 6px rgba(60,64,67,0.08);
  }
  .title-qr-box img {
    width: 95px !important;
    height: 95px !important;
    object-fit: contain;
    display: block;
  }
  .title-qr-box .qr-label {
    font-size: 0.42em;
    color: #5f6368;
    margin-top: 4px;
    font-weight: 600;
    line-height: 1.2;
  }
---

<!-- 
_class: lead
-->

# Transformers.js と LiteRT をつかって<br>Gemma をブラウザで動かそう

### Gemma Meetup 2026 (GDG Tokyo)

太田 満久（おおたまん）  
[@ohtaman](https://x.com/ohtaman) / Ubie Lab 所長, GDE (AI / Cloud AI)

<div class="title-qr-box">
  <img src="./img/qr_slides_pdf.png" alt="スライド資料 QR" width="95" height="95">
  <div class="qr-label">スライド資料</div>
</div>

---

## 1. 自己紹介

<div class="profile-layout">
<div class="profile-info">

<div class="profile-name">おおたまん</div>

- **所属**:
  - Ubie. Inc. (Ubie Lab 所長)
  - Google Developer Expert (AI / Cloud AI)
- **活動**:
  - 数理最適化コミュニティ Casual Optimization
  - 書籍執筆
- **X**: [@ohtaman](https://x.com/ohtaman)
- **GitHub**: [github.com/ohtaman](https://github.com/ohtaman)

</div>
<div class="profile-side">

<div class="profile-photo">
  <img src="https://ohtaman.github.io/imgs/profile.jpg" alt="おおたまん">
</div>

<div class="profile-qr-card">
  <img src="./img/qr_ohtaman.png" alt="QR Code">
</div>

</div>
</div>


---

## 2-1. Google I/O Connect China 2026

<p class="lead-msg">中国・APAC のデベロッパーに向けた Google I/O の地域旗艦イベント</p>

<div class="split">
<div class="left" style="flex: 1.05;">

- **開催**: 2026.8.12-13 上海世博中心
- Google I/O の中国版イベント
- 現地・APACのデベロッパー中心に 2,000 名以上が参加

<div class="inline-qr-card">
  <img src="./img/qr_ioconnectchina.png" alt="イベント公式サイト QR">
  <div class="qr-label">イベント公式サイト</div>
</div>

</div>
<div class="right" style="flex: 0.95;">

<div class="photo-box contain">
  <img src="./img/8Q1A1222.JPG" alt="上海現地 集合写真">
  <span class="caption">I/O Connect China 2026 メイン会場 集合写真</span>
</div>

</div>
</div>

---

## 2-2. 「エッジ推論」と「オープンモデル」の重視

<p class="lead-msg">AndroidとWebで6割。エッジ推論やオープンモデルのセッションが多い</p>

<div class="compact">

| 比較項目 | Google I/O (Mountain View / 72枠) | Google I/O Connect China (86枠) |
|---|---|---|
| **カテゴリ構成** | ・Android: 43% (31枠)<br>・Cloud: 21% (15枠)<br>・AI: 19% (14枠)<br>・Web: 17% (12枠) | ・Android: 40% (34枠)<br>・Web: 21% (18枠)<br>・AI: 21% (18枠)<br>・Cloud: 19% (16枠)<br>👉 **Android + Web で約 60%** |
| **主な AI 関連トピック** | ・Gemini API / Google AI Studio<br>・Vertex AI / Workspace MCP<br>・Android Studio / DevTools AI | ・Gemma (オープンモデル)<br>・LiteRT / LiteRT-LM (エッジ推論)<br>・TPU ソフトウェア (MaxText / vLLM) |
| **推論・適用の方向性** | クラウド API 連携、開発ツールへの AI 統合 | **端末内（On-device）推論、オープンモデル活用** |

<div class="footnote">
※ 共通の主要技術分野（Android / Cloud / AI / Web）のセッションを対象に集計（対談・基調等を除く）
</div>

</div>

---

## 2-3. Scale AI with Google's TPU software stack

<p class="lead-msg">モデル構築から学習・推論まで、ソフトウェアスタックが体系化されている</p>

<div class="split compact">
<div class="left" style="flex: 1.05;">

- **セッション概要**:
  - Google TPU を支えるオープンソース群の全体像を解説
- **モデルライフサイクルを支える 4 つの層**:
  - **Inference**: **vLLM TPU**（低遅延推論）
  - **Post-training**: **Tunix**（事後学習・LoRA・RL）
  - **Pre-training**: **MaxText**（事前学習）
  - **Model building**: **JAX / TorchTPU**

</div>
<div class="right" style="flex: 0.95;">

<div class="photo-box contain" style="height: 330px;">
  <img src="./img/google_tpu_software_stack.png" alt="Google TPU ソフトウェアスタック">
  <span class="caption">セッション: Scale AI with Google's TPU software stack</span>
</div>

</div>
</div>

---

## 2-4. 展示ブース: 多様なデバイスで動く Gemma のデモ

<p class="lead-msg">モバイル、モバイル、ARメガネなど、多様なデバイスで Gemma のデモが展示されていた</p>

<div class="split compact">
<div class="left" style="flex: 1.05;">

- **視覚障害者向け画面読み上げ「VisAware」**
  - スクリーンリーダー用のAI視覚認識プラグイン
  - 画面内の画像・図表をGemmaで解説
- **in BrowserでのGemmaの利用例**
  - Transformers.js や LiteRT-LM Web API
- **その他多様なデバイスでの活用**
  - ブラウザやスマホ、各種エッジデバイスなど、様々なデバイスで Gemma を実行

</div>
<div class="right" style="flex: 0.95;">

<div class="photo-box contain" style="height: 380px;">
  <img src="./img/DSCT1984.JPG" alt="Gemma展示 VisAware">
  <span class="caption">会場展示: Gemma 活用プラグイン VisAware ブース</span>
</div>

</div>
</div>

---

## 3. ブラウザで動かす理由

<p class="lead-msg">手軽な配布、ブラウザ機能の利用、推論コストのユーザー端末への転嫁</p>

- **① 配布の容易さ**
  - Python や環境構築が不要。URL を開くだけで即利用可能。
- **② ブラウザ機能との連携**
  - カメラ、マイク、画面共有などブラウザの機能をシームレスに利用
- **③ 計算コストの転嫁**
  - サーバー側の推論コストをユーザーへ転嫁

---

## 4. ブラウザ LLM の実行アプローチ

<p class="lead-msg">組み込み API もしくは JSライブラリを利用する</p>

- **ブラウザ組み込み（Gemini Nano / Chrome Prompt API）**
  - Chrome の標準機能のため、実装が容易
  - 利用モデルは固定（Gemini Nano）でチューニング不可
- **JSライブラリ（Transformers.js / LiteRT-LM / WebLLM）**
  - 外部ライブラリやモデル管理が必要
  - モデルを自由に選択できる（Gemma 等）
  - 自前チューニングモデルを利用することも可能

---

## 5. Transformers.js の思想と実装

<p class="lead-msg">Hugging Face の巨大資産をそのまま Web へ</p>

- HF Hub 上の多様な ONNX モデルを直接ブラウザで利用可能
- WebGPU (ONNX Runtime Web) によるハードウェアアクセラレーション

**呼び出しコード（実例）**:

```javascript
import { pipeline } from '@huggingface/transformers';

const pipe = await pipeline('text-generation', 'onnx-community/gemma-4-E2B-it-ONNX', {
    device: 'webgpu', dtype: 'q4f16'
  });
  const result = await pipe([
    { role: 'user', content: 'ブラウザで LLM を動かすメリットを 3 つ教えて' }
  ], { max_new_tokens: 1024 });
  ```

---

## 6. LiteRT-LM の思想と実装

<p class="lead-msg">TFLite の後継。Android / iOS / Web を単一モデルで</p>

- Google のオンデバイス推論基盤（旧 TensorFlow Lite）の後継
- 高度な最適化により、実用的なパフォーマンス
- 単一の `.litertlm` ファイルが、モバイルとブラウザでそのまま共通動作

**呼び出しコード（実例）**:

```javascript
  import { Engine } from '@litert-lm/core';

  const engine = await Engine.create({ model: 'gemma-4-E2B-it-web.litertlm' });
  const chat = await engine.createConversation();
  const stream = chat.sendMessageStreaming('ブラウザで LLM を動かすメリットを 3 つ教えて');
  for await (const chunk of stream) {
    updateUI(chunk.content?.[0]?.text); // リアルタイムストリーミング
  }
  ```

---

## 7. 量子化とアーキテクチャの内部比較

<p class="lead-msg">Web エコシステム重視の Transformers.js と、単一バイナリ・最適化重視の LiteRT-LM</p>

<div class="compact">

| 比較軸 | **Transformers.js** | **LiteRT-LM** |
|---|---|---|
| **ベースモデル** | Gemma 4 E2B-it | Gemma 4 E2B-it |
| **量子化方式** | **INT4 (q4f16)** (Optimum / MatMulNBits) | **4-bit 級 混合量子化** (2/4/8-bit Mixed + mmap) |
| **パッケージ構成** | ONNX + 外部データ + トークナイザ（複数ファイル） | 重み・トークナイザ・メタデータが **単一バイナリ** |
| **トークナイザ** | JavaScript / Wasm 分離実装 (`tokenizers.js`) | C++ ネイティブ SentencePiece 内蔵 |
| **推論エンジン** | **ONNX Runtime Web (WebGPU / WGSL)** | **LiteRT C++ コア (WebAssembly + WebGPU)** |
| **アーキテクチャ設計** | **Web / オープンエコシステム（疎結合）**<br>HF の膨大な資産を柔軟にパイプライン化 | **モバイル / 組み込み直系（密結合）**<br>配布事故ゼロの単一バイナリ ＆ 極限最適化 |

👉 **HF 資産の柔軟なパイプライン化 vs 配布事故ゼロの単一バイナリ極限最適化**

</div>

---

## 8. 【デモ】Transformers.js と LiteRT-LM の動作比較

<p class="lead-msg">同一モデル（Gemma 4 E2B 4-bit）のブラウザ上での動作比較</p>

<div class="split compact">
<div class="left" style="flex: 0.6; text-align: center;">

<div class="demo-qr-card">
  <img src="./img/qr_ai_in_browser_demo.png" alt="デモURLのQRコード" width="100" height="100">
  <p style="margin-top: 8px; font-size: 0.72em; margin-bottom: 0; word-break: break-all;">
    👉 <strong>デモ公開中</strong><br>
    <a href="https://ohtaman.github.io/ai-in-browser-demo/06_comparison_arena/index.html">ohtaman.github.io/ai-in-browser-demo/<br>06_comparison_arena/index.html</a>
  </p>
</div>

</div>
<div class="right" style="flex: 1.4;">

<div class="photo-box contain" style="height: 310px;">
  <img src="./img/arena_benchmark_result.png" alt="実測ベンチマーク画面">
  <span class="caption">実測結果: フィボナッチ関数生成（1,155 vs 1,342 tok）</span>
</div>

</div>
</div>

---

## 9. 特徴と実測値の比較

<p class="lead-msg">LiteRT-LM は速度・TTFTで優勢。ただし、対応モデルの数や柔軟性では Transformers.js に分がある</p>

<div class="compact">

| 比較ポイント | **Transformers.js** | **LiteRT-LM** |
|---|---|---|
| **生成速度（実測）** | **39.1 tok/s**（十分実用的） | **55.3 tok/s**（**約 1.4 倍 高速 / +41%**） |
| **初回応答 (TTFT)** | **369 ms** | **180 ms**（**約 2 倍 高速 / -51% 短縮**） |
| **配布パッケージ** | ONNX + データ + トークナイザ（複数ファイル） | **単一バイナリ**（`.litertlm` 1本で完結） |
| **対応モデル** | **豊富**（HF 上の多様なオープンモデルをコミュニティが変換） | **限定的**（Google 公式対応の Gemma 等が中心） |
| **機能の成熟度** | **成熟**（マルチモーダル対応、Structured Output 等） | **発展途上**（Web 版は Structured Output 未対応など） |
| **どんな時に選ぶ？** | **多様なモデルや構造化出力を扱いたい時**<br>音声・画像など他タスクと連携したい時 | **Gemma で最速の推論速度・低遅延を出したい時**<br>Android / iOS アプリとモデルを共通化したい時 |

👉 **純粋な推論性能と単一バイナリ配布は LiteRT-LM が優勢。対応モデルの広さや Web での機能成熟度（Structured Output 等）は Transformers.js に分がある。**

</div>

---

## 10. ブラウザ推論における実用上の考慮点

<p class="lead-msg">初回ダウンロードやメモリの圧迫、計算負荷への配慮が必要</p>

- **① 初回ダウンロードのオーバーヘッド（数GB）**
  - 2回目以降はキャッシュ可能だが初回の待機時間が体験を左右
- **② モバイル端末でのメモリ上限（タブの強制終了）**
  - スマホのブラウザは 1 タブあたりのメモリ制限が厳しい
- **③ 計算負荷と実行環境への配慮**
  - ローカル推論による**端末の発熱・バッテリー消費**
  - メインスレッドをブロックしないための **Web Worker の活用**が必須

---

## 11. まとめ

- **① I/O Connect China から見えたエッジ推論の潮流**
  - オンデバイス推論やオープンモデル（Gemma）への強い関心
- **② ブラウザ推論ならではの価値**
  - 手軽な配布とブラウザ標準機能との連携
  - 推論コストをユーザーに転嫁
- **③ Transformers.js と LiteRT-LM の使い分け**
  - **LiteRT-LM**: 単一バイナリ配布と高い推論性能
  - **Transformers.js**: 多様なモデルの選択肢と機能成熟度

---

<!-- 
_class: lead
-->

# ありがとうございました！

- **デモ**: [ohtaman.github.io/ai-in-browser-demo/06_comparison_arena/index.html](https://ohtaman.github.io/ai-in-browser-demo/06_comparison_arena/index.html)
- **デモコード**: [github.com/ohtaman/ai-in-browser-demo](https://github.com/ohtaman/ai-in-browser-demo)
- **スライド資料**: [ohtaman.github.io/slides/gemma_meetup_2026/slides.pdf](https://ohtaman.github.io/slides/gemma_meetup_2026/slides.pdf)
