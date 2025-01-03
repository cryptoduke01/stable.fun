#  **Stable.Fun**  

**Stable.Fun**, a project built to demonstrate the power of Solana and Anchor! This repository is part of the **stable.fun** initiative where users can create their own stablecoins powered by yield-bearing stablebond tokens from Etherfuse. 🚀

---

## 🎯 **Project Overview**

This program is designed to:

1. **Enable users to mint their own stablecoins**:
   - These stablecoins are backed by yield-bearing stablebonds, combining stability and profitability. 💸

2. **Integrate DeFi-related features**:
   - Unlock opportunities for decentralized finance within Solana's ecosystem. 🔗

3. **Participate in a Hackathon**:
   - This project is part of a hackathon with a potential prize of **5000 USDC**. 🏆

---

## 📂 **Directory Structure**

Here's a quick overview of the project structure:

```plaintext
.
├── programs
│   ├── my_solana_program
│   │   ├── Cargo.toml         # Project dependencies
│   │   ├── src
│   │   │   ├── lib.rs         # Main program logic
│   │   │   └── processor.rs   # Core Solana instruction handling
│   │   └── target            # Build output
├── migrations
├── Anchor.toml               # Anchor project configuration
├── Cargo.lock                # Dependency lock file
└── README.md                 # Project documentation (this file!)
```

---

## 🚀 **How to Build and Deploy**

Follow these steps to get started:

### Prerequisites

- Rust (latest stable and nightly versions)
- Solana CLI
- Anchor CLI (version **0.24.2**)  
  ```bash
  anchor --version
  ```
  Ensure Anchor CLI is **0.24.2** for compatibility.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/my_solana_program.git
cd my_solana_program
```

### Step 2: Install Dependencies

Ensure you have all dependencies installed:

```bash
cargo install --locked --version 0.24.2 anchor-cli
```

### Step 3: Build the Program

```bash
anchor build
```

### Step 4: Deploy to Solana

Before deploying, ensure your Solana keypair is set up:

```bash
solana-keygen new -o ~/.config/solana/id.json
solana config set --url http://127.0.0.1:8899
```

Then deploy the program:

```bash
anchor deploy
```

---

## 🛠️ **Development Notes**

### Matching Versions

Ensure the following versions match in your `Cargo.toml`:

```toml
anchor-lang = "0.24.2"
anchor-spl = "0.24.2"
```

Run `cargo update` after making changes.

### Supported Targets

Ensure your Rust toolchain supports Solana's BPF target:

```bash
rustup target add bpfel-unknown-unknown
```

---

## 🌈 **Features**

- **Yield-Bearing Stablecoins**: Stablecoins that grow in value over time. 📈
- **Hackathon-Ready**: Designed to win with innovation and creativity. 🎨
- **DeFi Integration**: Unlock decentralized finance capabilities. 🔒

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 **Contributions**

We welcome contributions! Please open an issue or submit a pull request if you want to improve the project.

---

## 🛡️ **Disclaimer**

This project is experimental and part of a hackathon. Use at your own risk. Always test in a safe environment before deploying to mainnet.

---

### 💬 **Contact**

For questions or support, feel free to reach out:

- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)
- **Email**: youremail@example.com

---

🌟 *Let's build the future of decentralized finance together!*
