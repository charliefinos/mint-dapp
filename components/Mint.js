import { useState } from 'react'

const Mint = () => {
    // const {runContractFunction: Mint} = useWeb3Contract({
    //     abi: //,
    //     contractAddress: //
    //     functionName: //
    //     params: {},
    //     msgValue: //
    // })
    const [isMinting, setIsMinting] = useState()
    const mintingHandler = () => {
        setIsMinting(!isMinting)
    }
    return (
        <div>
            <button
                onClick={() => {
                    mintingHandler()
                }}
            >
                Mint
            </button>
            {isMinting ? <p>Minting</p> : <p>Not Minting</p>}
        </div>
    )
}

export default Mint
