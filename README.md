# FlowState

<div align="center">
  <img src="public/workflow-svgrepo-com.svg" alt="FlowState Logo" width="120" height="120" />
  
  <h1>Build AI Workflows Without Code</h1>
  
  <p align="center">
    <strong>Create powerful AI workflows with an intuitive visual interface. Connect any AI model, process data, and automate tasks—all while keeping your data private and secure.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/hatif03/flow-state/blob/master/LICENSE">
      <img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue.svg" />
    </a>
    <a href="https://github.com/hatif03/flow-state">
      <img alt="GitHub Stars" src="https://img.shields.io/github/stars/hatif03/flow-state?style=social" />
    </a>
    <a href="https://flowstate.app">
      <img alt="Live Demo" src="https://img.shields.io/badge/🌐%20Live%20Demo-flowstate.app-green" />
    </a>
  </p>
</div>

---

## 🚀 What is FlowState?

FlowState is a **privacy-first, no-code AI workflow builder** that runs entirely in your browser. Instead of repeatedly typing the same prompts into chat interfaces, you can create reusable, visual workflows that chain multiple AI operations together.

### The Problem We Solve

If you find yourself:
- 🔄 **Repeating the same AI instructions** over and over
- ⏰ **Wasting time** on repetitive prompt engineering
- 🔒 **Worried about data privacy** with AI services
- 🎯 **Needing complex workflows** that go beyond simple chat

**FlowState is your solution.**

---

## ✨ Key Features

### 🎨 **Visual Workflow Builder**
- **Drag-and-drop interface** - No coding required
- **Infinite canvas** - Build workflows of any complexity
- **Real-time connections** - See data flow between nodes
- **Responsive design** - Works on desktop, tablet, and mobile

### 🤖 **AI Model Support**
- **Any AI model** - OpenAI, Anthropic, Google, XAI, and more
- **Your own API keys** - Complete control over costs and usage
- **Model switching** - Test different models in the same workflow
- **Custom parameters** - Fine-tune temperature, tokens, and more

### 🔒 **Privacy & Security**
- **100% local execution** - Your data never leaves your browser
- **No data collection** - We don't store your workflows or data
- **Client-side processing** - Complete privacy and security
- **Offline capable** - Works without internet (except for AI calls)

### 🔄 **Workflow Management**
- **Save & organize** - Multiple workflows with custom names
- **Import/Export** - Share workflows with others
- **Templates** - Pre-built workflows for common tasks
- **Version control** - Track changes and iterations

### 🎯 **Node Types**
- **Prompt Nodes** - Text inputs with labels and validation
- **AI Nodes** - Connect to any AI model with custom system prompts
- **Markdown Nodes** - Format and display outputs beautifully
- **Annotation Nodes** - Add documentation and notes
- **Error Nodes** - Handle and display errors gracefully

---

## 🎯 Use Cases

### 📧 **Email Automation**
```
Email Input → Extract Key Info → Generate Response → Format Output
```
- Process incoming emails automatically
- Extract important information
- Generate professional responses
- Maintain consistent tone and style

### 📝 **Content Creation**
```
Topic Input → Research → Generate Content → Format for Platform → Schedule
```
- Create social media posts for multiple platforms
- Generate blog posts and articles
- Maintain brand voice across channels
- Batch content creation

### 📊 **Data Analysis**
```
Data Input → Clean & Process → Analyze → Generate Insights → Create Report
```
- Process CSV files and spreadsheets
- Generate data insights and summaries
- Create automated reports
- Transform data between formats

### 🎨 **Creative Workflows**
```
Idea Input → Brainstorm → Refine → Generate Variations → Select Best
```
- Creative writing and ideation
- Image generation prompts
- Design briefs and specifications
- Content variations and A/B testing

---

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
1. Visit **[flowstate.app](https://flowstate.app)**
2. Click **"Launch App"** or **"Start Building"**
3. Add your API keys in the sidebar
4. Start building your first workflow!

### Option 2: Run Locally
```bash
# Clone the repository
git clone https://github.com/hatif03/flow-state.git
cd flow-state

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 🛠️ Getting Started

### 1. **Set Up API Keys**
- Click the "API Keys" button in the sidebar
- Add your API keys for the AI models you want to use
- Keys are stored locally in your browser

### 2. **Create Your First Workflow**
- Click "New Workflow" to create a blank canvas
- Drag nodes from the toolbar onto the canvas
- Connect nodes by dragging from output to input ports
- Click the "Run" button on any node to execute

### 3. **Build Complex Workflows**
- Chain multiple AI operations together
- Use prompt nodes for different inputs
- Add markdown nodes to format outputs
- Use annotation nodes for documentation

### 4. **Save and Reuse**
- Your workflows are automatically saved locally
- Give them descriptive names
- Import/export workflows to share with others

---

## 🎨 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x400/1e293b/ffffff?text=Workflow+Builder+Interface" alt="Workflow Builder" />
  <p><em>Visual workflow builder with drag-and-drop nodes</em></p>
</div>

---

## 🏗️ Architecture

FlowState is built with modern web technologies:

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI**: Radix UI, Tailwind CSS
- **State Management**: Zustand
- **Workflow Engine**: Custom node-based system
- **AI Integration**: Vercel AI SDK
- **Deployment**: Vercel (or any static hosting)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 **Report Issues**
- Found a bug? [Open an issue](https://github.com/hatif03/flow-state/issues)
- Have a feature request? [Start a discussion](https://github.com/hatif03/flow-state/discussions)

### 💻 **Code Contributions**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📚 **Documentation**
- Improve existing documentation
- Add examples and tutorials
- Translate to other languages

---

## 🎯 Roadmap

- [ ] **More Node Types**: Database, API, file processing nodes
- [ ] **Collaboration**: Real-time collaborative editing
- [ ] **Templates**: Pre-built workflow templates
- [ ] **Plugins**: Custom node development
- [ ] **Mobile App**: Native mobile experience
- [ ] **Cloud Sync**: Optional cloud storage for workflows

---

## 🙏 Acknowledgments

- **React Flow** - For the amazing node-based interface
- **tldraw** - Inspiration for the visual workflow approach
- **Vercel AI SDK** - For seamless AI model integration
- **Radix UI** - For accessible, beautiful components
- **The AI Community** - For feedback and support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>
    <strong>Built with ❤️ for the AI community</strong>
  </p>
  <p>
    <a href="https://flowstate.app">🌐 Try FlowState</a> •
    <a href="https://github.com/hatif03/flow-state">⭐ Star on GitHub</a> •
    <a href="https://github.com/hatif03/flow-state/issues">🐛 Report Issues</a>
  </p>
</div>