export default function Button({onClick,children}){
    return(
        <>
            <button className="px-8 py-2 bg-slate-600 rounded-r-full text-white" onClick={onClick}>{children}</button>
        </>
    )
}