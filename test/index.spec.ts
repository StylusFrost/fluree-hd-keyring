/* tslint:disable no-invalid-this */
import assert = require('assert')
import HdKeyring from '../src'
import Query from 'flureejs-query'
import Transaction from 'flureejs-tx'
import Request from 'flureejs-request'
import { isValidAuthID } from 'flureejs-utils'

const sampleMnemonic =
  'finish oppose decorate face calm tragic certain desk hour urge dinosaur mango'
const firstAcct = Buffer.from('Tf8REZpquJyoZeFNUzQT1H3JPzkNKLSGxEA')
const secondAcct = Buffer.from('TeyGJQYZ1YdhGhGJJncVTRqAqJtAMxLTAMf')

describe('hd-keyring', function() {
  let keyring: HdKeyring
  beforeEach(() => {
    keyring = new HdKeyring()
  })

  describe('constructor', function() {
    it('constructs', function() {
      keyring = new HdKeyring({
        mnemonic: sampleMnemonic,
        numberOfAccounts: 2,
      })
      return keyring.getAccounts().then(accounts => {
        assert.equal(Buffer.compare(accounts[0], firstAcct) === 0 ? true : false, true)
        assert.equal(Buffer.compare(accounts[1], secondAcct) === 0 ? true : false, true)
      })
    })
  })

  describe('Keyring.type', function() {
    it('is a class property that returns the type string.', function() {
      const type = HdKeyring.type
      assert.equal(typeof type, 'string')
    })
  })

  describe('#type', function() {
    it('returns the correct value', function() {
      const type = keyring.type
      const correct = HdKeyring.type
      assert.equal(type, correct)
    })
  })

  describe('#serialize empty wallets.', function() {
    it('serializes a new mnemonic', function() {
      keyring
        .serialize()
        .then(output => {
          assert.equal(output['numberOfAccounts'], 0)
          assert.equal(output['mnemonic'], undefined)
        })
        .catch(err => {
          throw err
        })
    })
  })

  describe('#deserialize a private key', function() {
    it('serializes what it deserializes', function() {
      keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })
        .then(() => {
          assert.equal(keyring.wallets.length, 1, 'restores two accounts')
          return keyring.addAccounts(1)
        })
        .then(() => {
          return keyring.getAccounts()
        })
        .then(accounts => {
          assert.equal(Buffer.compare(accounts[0], firstAcct) === 0 ? true : false, true)
          assert.equal(Buffer.compare(accounts[1], secondAcct) === 0 ? true : false, true)
          assert.equal(accounts.length, 2)

          return keyring.serialize()
        })
        .then(serialized => {
          assert.equal(serialized.mnemonic, sampleMnemonic)
        })
        .catch(err => {
          throw err
        })
    })
  })

  describe('#addAccounts', function() {
    describe('with no arguments', function() {
      it('creates a single wallet', function() {
        keyring
          .addAccounts()
          .then(() => {
            assert.equal(keyring.wallets.length, 1)
          })
          .catch(err => {
            throw err
          })
      })
    })

    describe('with a numeric argument', function() {
      it('creates that number of wallets', function() {
        keyring
          .addAccounts(3)
          .then(() => {
            assert.equal(keyring.wallets.length, 3)
          })
          .catch(err => {
            throw err
          })
      })
    })
  })

  describe('#signRequest', function() {
    it('returns the expected value', function() {
      const authID = firstAcct
      const requestParams = {
        from: '0x' + authID.toString('hex'),
        param: '0x7b7d',
        type: '0x6c6973742d736e617073686f7473',
        host: '0x6c6f63616c686f7374',
        db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
        formattedDate: '0x5475652c2031382041756720323032302030393a30323a353420474d54',
        auth: '0x',
      }
      let request: Request
      return keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })
        .then(() => {
          request = new Request(requestParams)
          return keyring.signRequest(authID, request)
        })
        .then(() => {
          assert.equal(
            request.r.toString('hex'),
            'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
          )
          assert.equal(
            request.s.toString('hex'),
            '4293285f206ea46e18a8cae82e84779c0e579d7dbe5e557081da0e11f5b5086b',
          )
        })
        .catch(reason => {
          assert.ok(false, reason)
        })
    })
  })

  describe('#signTransaction', function() {
    it('returns the expected value', function() {
      const authID = firstAcct
      const txParams = {
        from: '0x' + authID.toString('hex'),
        type: '0x7478',
        db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
        tx:
          '0x5b7b225f6964223a225f636f6c6c656374696f6e247365616c222c226e616d65223a227365616c222c22646f63223a224120636f6c6c656374696f6e20746f20686f6c642074686520696e666f726d6174696f6e206f6620746865207365616c73227d5d',
        auth: '0x5466386f764864676e445a58724d7a71454c706131787331636664684a696533507761',
        fuel: '0x0f4240',
        nonce: '0x2e',
        expire: '0x017410ddd6e2',
      }
      let tx: Transaction
      return keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })
        .then(() => {
          tx = new Transaction(txParams)
          return keyring.signTransaction(authID, tx)
        })
        .then(() => {
          assert.equal(
            tx.r.toString('hex'),
            'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
          )
          assert.equal(
            tx.s.toString('hex'),
            '5f220fb3b29361438f30f5a560641fb91d5193dea39d1f91586ea3194749ae65',
          )
        })
        .catch(reason => {
          assert.ok(false, reason)
        })
    })
  })

  describe('#signQuery', function() {
    it('returns the expected value', function() {
      const authID = firstAcct
      const queryParams = {
        from: '0x' + authID.toString('hex'),
        param: '0x6869207468657265',
        type: '0x7175657279',
        host: '0x6c6f63616c686f7374',
        db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
        formattedDate: '0x5475652c2031382041756720323032302030393a30323a353420474d54',
        auth: '0x',
      }
      let query: Query
      return keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })
        .then(() => {
          query = new Query(queryParams)
          return keyring.signQuery(authID, query)
        })
        .then(() => {
          assert.equal(
            query.r.toString('hex'),
            'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
          )
          assert.equal(
            query.s.toString('hex'),
            'b4f7b7d3f4799dda2721495816c6b2ec91f4f7473790a6697ce8c978603cef82',
          )
        })
        .catch(reason => {
          assert.ok(false, reason)
        })
    })
  })

  describe('custom hd paths', function() {
    it('can deserialize with an hdPath param and generate the same accounts.', function() {
      const hdPathString = `m/44'/60'/0'/0`
      const sampleMnemonic =
        'finish oppose decorate face calm tragic certain desk hour urge dinosaur mango'

      return keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
          hdPath: hdPathString,
        })
        .then(() => {
          return keyring.getAccounts()
        })
        .then(authIDs => {
          assert.equal(Buffer.compare(authIDs[0], firstAcct) === 0 ? true : false, true)
          return keyring.serialize()
        })
        .then(serialized => {
          assert.equal(serialized.hdPath, hdPathString)
        })
        .catch(reason => {
          assert.ok(false, reason)
        })
    })

    it('can deserialize with an hdPath param and generate different accounts.', function() {
      const hdPathString = `m/44'/60'/0'/1`
      const sampleMnemonic =
        'finish oppose decorate face calm tragic certain desk hour urge dinosaur mango'

      return keyring
        .deserialize({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
          hdPath: hdPathString,
        })
        .then(() => {
          return keyring.getAccounts()
        })
        .then(authIDs => {
          assert.notEqual(Buffer.compare(authIDs[0], firstAcct) === 0 ? true : false, true)
          return keyring.serialize()
        })
        .then(serialized => {
          assert.equal(serialized.hdPath, hdPathString)
        })
        .catch(reason => {
          assert.ok(false, reason)
        })
    })

    describe('create and restore 100 accounts', function() {
      it('should restore same accounts with no problem', async function() {
        // tslint:disable-next-line
        this.timeout(40000)
        for (let i = 0; i < 100; i++) {
          keyring = new HdKeyring({
            numberOfAccounts: 1,
          })
          const originalAccounts = await keyring.getAccounts()
          const serialized = await keyring.serialize()
          const mnemonic = serialized.mnemonic

          keyring = new HdKeyring({
            numberOfAccounts: 1,
            mnemonic,
          })
          const restoredAccounts = await keyring.getAccounts()

          const first = originalAccounts[0]
          const restored = restoredAccounts[0]
          const msg = `Should restore same account from mnemonic: "${mnemonic}"`
          assert.equal(Buffer.compare(first, restored) === 0 ? true : false, true, msg)
        }
      })
    })

    describe('getAppKeyAuthID', function() {
      it('should return a public authID custom to the provided app key origin', async function() {
        const authID = firstAcct

        keyring = new HdKeyring({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })
        const appKeyAuthID = await keyring.getAppKeyAuthID(authID, 'someapp.origin.io')

        assert.notEqual(authID, appKeyAuthID)
        assert(isValidAuthID(appKeyAuthID))

        const accounts = await keyring.getAccounts()
        assert.equal(Buffer.compare(accounts[0], firstAcct) === 0 ? true : false, true)
      })

      it('should return different authIDs when provided different app key origins', async function() {
        keyring = new HdKeyring({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })

        const authID = firstAcct

        const appKeyAuthID1 = await keyring.getAppKeyAuthID(authID, 'someapp.origin.io')

        assert(isValidAuthID(appKeyAuthID1))

        const appKeyAuthID2 = await keyring.getAppKeyAuthID(authID, 'anotherapp.origin.io')

        assert(isValidAuthID(appKeyAuthID2))

        assert.notEqual(Buffer.compare(appKeyAuthID1, appKeyAuthID2) === 0 ? true : false, true)
      })

      it('should return the same authid when called multiple times with the same params', async function() {
        keyring = new HdKeyring({
          mnemonic: sampleMnemonic,
          numberOfAccounts: 1,
        })

        const authID = firstAcct

        const appKeyAuthID1 = await keyring.getAppKeyAuthID(authID, 'someapp.origin.io')

        assert(isValidAuthID(appKeyAuthID1))

        const appKeyAuthID2 = await keyring.getAppKeyAuthID(authID, 'someapp.origin.io')

        assert(isValidAuthID(appKeyAuthID2))

        assert.equal(Buffer.compare(appKeyAuthID1, appKeyAuthID2) === 0 ? true : false, true)
      })
    })

    describe('signing methods withAppKeyOrigin option', function() {
      it('should signRequest with the expected key when passed a withAppKeyOrigin', function() {
        const authID = firstAcct
        const requestParams = {
          from: '0x' + authID.toString('hex'),
          param: '0x7b7d',
          type: '0x6c6973742d736e617073686f7473',
          host: '0x6c6f63616c686f7374',
          db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
          formattedDate: '0x5475652c2031382041756720323032302030393a30323a353420474d54',
          auth: '0x',
        }
        let request: Request
        return keyring
          .deserialize({
            mnemonic: sampleMnemonic,
            numberOfAccounts: 1,
          })
          .then(() => {
            request = new Request(requestParams)
            return keyring.signRequest(authID, request, {
              withAppKeyOrigin: 'someapp.origin.io',
            })
          })
          .then(() => {
            assert.equal(
              request.r.toString('hex'),
              'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
            )
            assert.equal(
              request.s.toString('hex'),
              '29d6ec04c0e26eea191d4e3f26fc0f58ba343af6b30e37259135c2508b3126a6',
            )
          })
          .catch(reason => {
            assert.ok(false, reason)
          })
      })
      it('should signQuery with the expected key when passed a withAppKeyOrigin', function() {
        const authID = firstAcct
        const queryParams = {
          from: '0x' + authID.toString('hex'),
          param: '0x6869207468657265',
          type: '0x7175657279',
          host: '0x6c6f63616c686f7374',
          db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
          formattedDate: '0x5475652c2031382041756720323032302030393a30323a353420474d54',
          auth: '0x',
        }
        let query: Query
        return keyring
          .deserialize({
            mnemonic: sampleMnemonic,
            numberOfAccounts: 1,
          })
          .then(() => {
            query = new Query(queryParams)
            return keyring.signQuery(authID, query)
          })
          .then(() => {
            assert.equal(
              query.r.toString('hex'),
              'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
            )
            assert.equal(
              query.s.toString('hex'),
              'b4f7b7d3f4799dda2721495816c6b2ec91f4f7473790a6697ce8c978603cef82',
            )
          })
          .catch(reason => {
            assert.ok(false, reason)
          })
      })
      it('should signTransaction with the expected key when passed a withAppKeyOrigin', function() {
        const authID = firstAcct
        const txParams = {
          from: '0x' + authID.toString('hex'),
          type: '0x7478',
          db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
          tx:
            '0x5b7b225f6964223a225f636f6c6c656374696f6e247365616c222c226e616d65223a227365616c222c22646f63223a224120636f6c6c656374696f6e20746f20686f6c642074686520696e666f726d6174696f6e206f6620746865207365616c73227d5d',
          auth: '0x5466386f764864676e445a58724d7a71454c706131787331636664684a696533507761',
          fuel: '0x0f4240',
          nonce: '0x2e',
          expire: '0x017410ddd6e2',
        }
        let tx: Transaction
        return keyring
          .deserialize({
            mnemonic: sampleMnemonic,
            numberOfAccounts: 1,
          })
          .then(() => {
            tx = new Transaction(txParams)
            return keyring.signTransaction(authID, tx)
          })
          .then(() => {
            assert.equal(
              tx.r.toString('hex'),
              'cbd32e463567fefc2f120425b0224d9d263008911653f50e83953f47cfbef3bc',
            )
            assert.equal(
              tx.s.toString('hex'),
              '5f220fb3b29361438f30f5a560641fb91d5193dea39d1f91586ea3194749ae65',
            )
          })
          .catch(reason => {
            assert.ok(false, reason)
          })
      })
    })
  })
})
