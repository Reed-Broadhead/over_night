export default function FooterSections( {words} : any ) {
    // const words: any = [word1, word2, word3]

    const mappedWords = words.map((el : any) => {
        return (
            <h1 className="my-auto text-xl text-black ">
                {el}
            </h1>
        )
    })

    return (
        <div className="w-[18%] h-3/4 flex flex-col items-center">
       
            {mappedWords}

    
        </div>
    )
}