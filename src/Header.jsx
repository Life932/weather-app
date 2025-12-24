function Header({title}) {
    return (
        <>
            <h1 className="text-4xl font-bold text-center text-white">
                {title}
            </h1>

            <p className="text-center text-sky-400 mt-2">
                Today is {new Date().toLocaleDateString("en-Us", {
                    weekday:"long",
                    year:"numeric",
                    month:"long",
                    day:"numeric"
                })}
            </p>
        </>

    );
}

export default Header;