[fluree-hd-keyring - v0.1.0](../README.md) > [HdKeyring](../classes/hdkeyring.md)

# Class: HdKeyring

## Hierarchy

`SimpleKeyring`

**↳ HdKeyring**

## Index

### Constructors

- [constructor](hdkeyring.md#constructor)

### Properties

- [hdPath](hdkeyring.md#hdpath)
- [hdWallet](hdkeyring.md#hdwallet)
- [mnemonic](hdkeyring.md#mnemonic)
- [opts](hdkeyring.md#opts)
- [root](hdkeyring.md#root)
- [type](hdkeyring.md#type)
- [wallets](hdkeyring.md#wallets)
- [hdPathString](hdkeyring.md#hdpathstring)
- [type](hdkeyring.md#type-1)

### Methods

- [addAccounts](hdkeyring.md#addaccounts)
- [addListener](hdkeyring.md#addlistener)
- [deserialize](hdkeyring.md#deserialize)
- [emit](hdkeyring.md#emit)
- [eventNames](hdkeyring.md#eventnames)
- [exportAccount](hdkeyring.md#exportaccount)
- [getAccounts](hdkeyring.md#getaccounts)
- [getAppKeyAuthID](hdkeyring.md#getappkeyauthid)
- [getMaxListeners](hdkeyring.md#getmaxlisteners)
- [initFromMnemonic](hdkeyring.md#initfrommnemonic)
- [listenerCount](hdkeyring.md#listenercount)
- [listeners](hdkeyring.md#listeners)
- [off](hdkeyring.md#off)
- [on](hdkeyring.md#on)
- [once](hdkeyring.md#once)
- [prependListener](hdkeyring.md#prependlistener)
- [prependOnceListener](hdkeyring.md#prependoncelistener)
- [rawListeners](hdkeyring.md#rawlisteners)
- [removeAccount](hdkeyring.md#removeaccount)
- [removeAllListeners](hdkeyring.md#removealllisteners)
- [removeListener](hdkeyring.md#removelistener)
- [serialize](hdkeyring.md#serialize)
- [setMaxListeners](hdkeyring.md#setmaxlisteners)
- [signQuery](hdkeyring.md#signquery)
- [signRequest](hdkeyring.md#signrequest)
- [signTransaction](hdkeyring.md#signtransaction)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new HdKeyring**(opts: _`any`_): [HdKeyring](hdkeyring.md)

_Overrides SimpleKeyring.\_\_constructor_

_Defined in [src/index.ts:15](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L15)_

**Parameters:**

| Name            | Type  |
| --------------- | ----- |
| `Optional` opts | `any` |

**Returns:** [HdKeyring](hdkeyring.md)

---

## Properties

<a id="hdpath"></a>

### `<Private>` hdPath

**● hdPath**: _`string`_

_Defined in [src/index.ts:13](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L13)_

---

<a id="hdwallet"></a>

### `<Private>` hdWallet

**● hdWallet**: _`hdkey`_

_Defined in [src/index.ts:12](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L12)_

---

<a id="mnemonic"></a>

### `<Private>` mnemonic

**● mnemonic**: _`string`_

_Defined in [src/index.ts:14](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L14)_

---

<a id="opts"></a>

### `<Private>` opts

**● opts**: _`any`_

_Defined in [src/index.ts:15](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L15)_

---

<a id="root"></a>

### `<Private>` root

**● root**: _`hdkey`_

_Defined in [src/index.ts:11](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L11)_

---

<a id="type"></a>

### type

**● type**: _`string`_ = HdKeyring.type

_Overrides SimpleKeyring.type_

_Defined in [src/index.ts:10](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L10)_

---

<a id="wallets"></a>

### wallets

**● wallets**: _`Array`<`Wallet`>_

_Inherited from SimpleKeyring.wallets_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:10_

---

<a id="hdpathstring"></a>

### `<Static>` hdPathString

**● hdPathString**: _"m/44&#x27;/60&#x27;/0&#x27;/0"_ = `m/44'/60'/0'/0`

_Defined in [src/index.ts:8](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L8)_

---

<a id="type-1"></a>

### `<Static>` type

**● type**: _`string`_ = "HD Key Tree"

_Overrides SimpleKeyring.type_

_Defined in [src/index.ts:9](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L9)_

---

## Methods

<a id="addaccounts"></a>

### addAccounts

▸ **addAccounts**(numberOfAccounts?: _`number`_): `Promise`<`Buffer`[]>

_Overrides SimpleKeyring.addAccounts_

_Defined in [src/index.ts:70](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L70)_

**Parameters:**

| Name                             | Type     | Default value |
| -------------------------------- | -------- | ------------- |
| `Default value` numberOfAccounts | `number` | 1             |

**Returns:** `Promise`<`Buffer`[]>

---

<a id="addlistener"></a>

### addListener

▸ **addListener**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.addListener_

_Defined in node_modules/@types/node/globals.d.ts:553_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="deserialize"></a>

### deserialize

▸ **deserialize**(opts?: _`any`_): `Promise`<`Buffer`[]>

_Overrides SimpleKeyring.deserialize_

_Defined in [src/index.ts:51](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L51)_

**Parameters:**

| Name                 | Type  | Default value |
| -------------------- | ----- | ------------- |
| `Default value` opts | `any` | {}            |

**Returns:** `Promise`<`Buffer`[]>

---

<a id="emit"></a>

### emit

▸ **emit**(event: _`string` \| `symbol`_, args: _`any`[]_): `boolean`

_Inherited from EventEmitter.emit_

_Defined in node_modules/@types/node/globals.d.ts:563_

**Parameters:**

| Name        | Type                 |
| ----------- | -------------------- |
| event       | `string` \| `symbol` |
| `Rest` args | `any`[]              |

**Returns:** `boolean`

---

<a id="eventnames"></a>

### eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

_Inherited from EventEmitter.eventNames_

_Defined in node_modules/@types/node/globals.d.ts:568_

**Returns:** `Array`<`string` \| `symbol`>

---

<a id="exportaccount"></a>

### exportAccount

▸ **exportAccount**(authID: _`Buffer`_, opts: _`undefined` \| `__type`_): `Promise`<`Buffer`>

_Inherited from SimpleKeyring.exportAccount_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:48_

**Parameters:**

| Name            | Type                    |
| --------------- | ----------------------- |
| authID          | `Buffer`                |
| `Optional` opts | `undefined` \| `__type` |

**Returns:** `Promise`<`Buffer`>

---

<a id="getaccounts"></a>

### getAccounts

▸ **getAccounts**(): `Promise`<`Array`<`Buffer`>>

_Inherited from SimpleKeyring.getAccounts_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:44_

**Returns:** `Promise`<`Array`<`Buffer`>>

---

<a id="getappkeyauthid"></a>

### getAppKeyAuthID

▸ **getAppKeyAuthID**(authID: _`Buffer`_, origin: _`string`_): `Promise`<`Buffer`>

_Inherited from SimpleKeyring.getAppKeyAuthID_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:56_

**Parameters:**

| Name   | Type     |
| ------ | -------- |
| authID | `Buffer` |
| origin | `string` |

**Returns:** `Promise`<`Buffer`>

---

<a id="getmaxlisteners"></a>

### getMaxListeners

▸ **getMaxListeners**(): `number`

_Inherited from EventEmitter.getMaxListeners_

_Defined in node_modules/@types/node/globals.d.ts:560_

**Returns:** `number`

---

<a id="initfrommnemonic"></a>

### `<Private>` initFromMnemonic

▸ **initFromMnemonic**(mnemonic: _`string`_): `void`

_Defined in [src/index.ts:28](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L28)_

**Parameters:**

| Name     | Type     |
| -------- | -------- |
| mnemonic | `string` |

**Returns:** `void`

---

<a id="listenercount"></a>

### listenerCount

▸ **listenerCount**(type: _`string` \| `symbol`_): `number`

_Inherited from EventEmitter.listenerCount_

_Defined in node_modules/@types/node/globals.d.ts:564_

**Parameters:**

| Name | Type                 |
| ---- | -------------------- |
| type | `string` \| `symbol` |

**Returns:** `number`

---

<a id="listeners"></a>

### listeners

▸ **listeners**(event: _`string` \| `symbol`_): `Function`[]

_Inherited from EventEmitter.listeners_

_Defined in node_modules/@types/node/globals.d.ts:561_

**Parameters:**

| Name  | Type                 |
| ----- | -------------------- |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

---

<a id="off"></a>

### off

▸ **off**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.off_

_Defined in node_modules/@types/node/globals.d.ts:557_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="on"></a>

### on

▸ **on**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.on_

_Defined in node_modules/@types/node/globals.d.ts:554_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="once"></a>

### once

▸ **once**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.once_

_Defined in node_modules/@types/node/globals.d.ts:555_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="prependlistener"></a>

### prependListener

▸ **prependListener**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.prependListener_

_Defined in node_modules/@types/node/globals.d.ts:566_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="prependoncelistener"></a>

### prependOnceListener

▸ **prependOnceListener**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.prependOnceListener_

_Defined in node_modules/@types/node/globals.d.ts:567_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="rawlisteners"></a>

### rawListeners

▸ **rawListeners**(event: _`string` \| `symbol`_): `Function`[]

_Inherited from EventEmitter.rawListeners_

_Defined in node_modules/@types/node/globals.d.ts:562_

**Parameters:**

| Name  | Type                 |
| ----- | -------------------- |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

---

<a id="removeaccount"></a>

### removeAccount

▸ **removeAccount**(authID: _`Buffer`_): `void`

_Inherited from SimpleKeyring.removeAccount_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:52_

**Parameters:**

| Name   | Type     |
| ------ | -------- |
| authID | `Buffer` |

**Returns:** `void`

---

<a id="removealllisteners"></a>

### removeAllListeners

▸ **removeAllListeners**(event: _`string` \| `symbol`_): `this`

_Inherited from EventEmitter.removeAllListeners_

_Defined in node_modules/@types/node/globals.d.ts:558_

**Parameters:**

| Name             | Type                 |
| ---------------- | -------------------- |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

---

<a id="removelistener"></a>

### removeListener

▸ **removeListener**(event: _`string` \| `symbol`_, listener: _`function`_): `this`

_Inherited from EventEmitter.removeListener_

_Defined in node_modules/@types/node/globals.d.ts:556_

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| event    | `string` \| `symbol` |
| listener | `function`           |

**Returns:** `this`

---

<a id="serialize"></a>

### serialize

▸ **serialize**(): `Promise`<`object`>

_Overrides SimpleKeyring.serialize_

_Defined in [src/index.ts:40](https://github.com/StylusFrost/fluree-hd-keyring/blob/ff68471/src/index.ts#L40)_

**Returns:** `Promise`<`object`>

---

<a id="setmaxlisteners"></a>

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

_Inherited from EventEmitter.setMaxListeners_

_Defined in node_modules/@types/node/globals.d.ts:559_

**Parameters:**

| Name | Type     |
| ---- | -------- |
| n    | `number` |

**Returns:** `this`

---

<a id="signquery"></a>

### signQuery

▸ **signQuery**(authID: _`Buffer`_, query: _`Query`_, opts: _`undefined` \| `__type`_): `Promise`<`Query`>

_Inherited from SimpleKeyring.signQuery_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:20_

**Parameters:**

| Name            | Type                    |
| --------------- | ----------------------- |
| authID          | `Buffer`                |
| query           | `Query`                 |
| `Optional` opts | `undefined` \| `__type` |

**Returns:** `Promise`<`Query`>

---

<a id="signrequest"></a>

### signRequest

▸ **signRequest**(authID: _`Buffer`_, request: _`Request`_, opts: _`undefined` \| `__type`_): `Promise`<`Request`>

_Inherited from SimpleKeyring.signRequest_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:28_

**Parameters:**

| Name            | Type                    |
| --------------- | ----------------------- |
| authID          | `Buffer`                |
| request         | `Request`               |
| `Optional` opts | `undefined` \| `__type` |

**Returns:** `Promise`<`Request`>

---

<a id="signtransaction"></a>

### signTransaction

▸ **signTransaction**(authID: _`Buffer`_, tx: _`Transaction`_, opts: _`undefined` \| `__type`_): `Promise`<`Transaction`>

_Inherited from SimpleKeyring.signTransaction_

_Defined in node_modules/fluree-simple-keyring/dist/index.d.ts:24_

**Parameters:**

| Name            | Type                    |
| --------------- | ----------------------- |
| authID          | `Buffer`                |
| tx              | `Transaction`           |
| `Optional` opts | `undefined` \| `__type` |

**Returns:** `Promise`<`Transaction`>

---
