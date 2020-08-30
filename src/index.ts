import SimpleKeyring from 'fluree-simple-keyring'
import { hdkey } from 'flureejs-wallet'
const bip39 = require('bip39')

// HdKeyring implementation

export default class HdKeyring extends SimpleKeyring {
  static readonly hdPathString = `m/44'/60'/0'/0`
  static type = 'HD Key Tree'
  public readonly type: string = HdKeyring.type
  private root!: hdkey
  private hdWallet!: hdkey
  private hdPath!: string
  private mnemonic!: string
  private opts: any = {}
  constructor(opts?: any) {
    super(opts)
    this.deserialize(opts)
      .then()
      .catch(err => {
        throw err
      })
  }

  // static methods

  // private methods
  private initFromMnemonic(mnemonic: string) {
    this.mnemonic = mnemonic
    const seed = bip39.mnemonicToSeed(mnemonic)
    this.hdWallet = hdkey.fromMasterSeed(seed)
    this.root = this.hdWallet.derivePath(this.hdPath)
  }

  // public instance methods

  /**
   * Serialize all opts
   */
  public serialize() {
    return Promise.resolve({
      mnemonic: this.mnemonic,
      numberOfAccounts: this.wallets.length,
      hdPath: this.hdPath,
    })
  }

  /**
   * Deserialize all opts
   */
  public deserialize(opts: any = {}) {
    this.opts = opts || {}
    this.wallets = []
    this.hdPath = opts['hdPath'] || HdKeyring.hdPathString

    if (this.opts['mnemonic']) {
      this.initFromMnemonic(this.opts['mnemonic'])
    }

    if (this.opts['numberOfAccounts']) {
      return this.addAccounts(this.opts['numberOfAccounts'])
    }

    return Promise.resolve([])
  }

  /**
   * Generate n new AuthID
   */
  public addAccounts(numberOfAccounts = 1) {
    if (!this.root) {
      this.initFromMnemonic(bip39.generateMnemonic())
    }

    const oldLen = this.wallets.length
    const newWallets = []
    for (let i = oldLen; i < numberOfAccounts + oldLen; i++) {
      const child = this.root.deriveChild(i)
      const wallet = child.getWallet()
      newWallets.push(wallet)
      this.wallets.push(wallet)
    }
    return Promise.resolve(newWallets.map(w => w.getAuthID()))
  }
}
