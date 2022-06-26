import Cards from "../../assets/admin/desktop/isocard.svg"
const Slogan = () => {
    return (
        <section className="text-36 my-14 relative font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">

            <div className="text-center md:col-span-1 md:col-start-2">
                <p className="">
                    Earn <span className="text-purple-300"> More </span>
                </p>
                <p className="">
                    Earn <span className="text-purple-300"> Pay Less </span>
                </p>
                <button className="text:white btn-slogan md:text-24  md:px-8 md:py-[8px]">Start</button>

            </div>
            <div className="mt-[69px] md:absolute  md:right-[-5rem]">

                <img src={Cards} alt="credit card" />
            </div>

        </section>
    );
}

export default Slogan;