import Underline from "./Underline"

    // this component works with Footer component by rendering
    // data given that to it by footer 

export default function FooterSections( {words} : any ) {
    // const words: any = [word1, word2, word3]

    // maps over array to make an 3 high coloumn  
    const mappedWords = words.map((el : any, index: number) => {
        return (
            <div key={index} className="my-auto">

                <Underline>
                <h1 className="my-auto text-xl text-black ">
                    {el}
                </h1>
            </Underline>
            </div>
        )
    })

    return (
        // returns mapped word 
        <div className="w-[14%] my-auto mx-auto h-3/4 flex flex-col items-center ">
            {mappedWords}
        </div>
    )
}