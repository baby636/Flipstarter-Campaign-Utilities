module.exports = class TransactionNotFoundError extends Error {
	constructor(txHash) {
		super(`The UTXO ('${txHash}') could not be verified as unspent.`, null, null)
		this.name = "TransactionNotFoundError"
	}
}