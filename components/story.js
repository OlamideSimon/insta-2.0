function story({img, username}) {
    return (
        <div>
            <img src={img} className='h-14 rounded-full p-{1.5} border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' />
            <p className='text-xs w-14 truncate text-center'>{username}</p>
        </div>
    )
}

export default story;