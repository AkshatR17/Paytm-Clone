
// eslint-disable-next-line react/prop-types
export const AppBar = ({label})=>{
    return <div className="shadow h-14 flex justify-between border m-4 rounded-3xl border-slate-300">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-3">
                Hello
            </div>
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2 mr-4">
                <div className="flex flex-col justify-center h-full text-xl">
                    {label}
                </div>
            </div>
        </div>
    </div>
};