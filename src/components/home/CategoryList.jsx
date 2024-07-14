import React from 'react'

const CategoryList = () => {
    const categories = [
        {
            "shak": ["লাল শাক", "লেটুস পাতা", "কলমি শাক", "ধনে পাতা", "বিলাতি ধনিয়া", "সজিনা পাতা", "বাটি শাক", "মূলা", "পাট শাক", "পুইশাক"]
        },
        {
            "vegetables": ["দেশি লাউ", "হাইব্রিড লাউ", "বেগুন", "লেটুস", "ঢেঁড়স", "দেশি শসা", "হাইব্রিড শসা", "টমেটো", "স্কোয়াশ"]
        },
        {
            "flowers": ["পর্তুলিকা", "পদ্ম", "রজনী"]
        },
        {
            "chinese-seeds": ["লাল চেরি টমেটো", "কালো চেরি টমেটো", "হলুদ চেরি টমেটো", "লাল ঢেঁড়স"]
        }
    ]
    return (
        <div className='my-10'>
            <h1 className='md:text-5xl text-xl border-b-2 pb-2 text-center'>CATEGORY WISE SEEDS DROPDOWN LIST</h1>
            <div className="categories grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="shak flex justify-center">
                    <details className="dropdown">
                        <summary className="btn btn-success m-1 md:text-2xl font-bold">SHAK SEEDS</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {categories[0].shak.map((e, i) => <li><a>{e}</a></li>)}
                        </ul>
                    </details>
                </div>
                <div className="vegetables flex justify-center">
                    <details className="dropdown">
                        <summary className="btn btn-success m-1 md:text-2xl font-bold">VEGETABLES SEEDS</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {categories[1].vegetables.map((e, i) => <li><a>{e}</a></li>)}
                        </ul>
                    </details>
                </div>
                <div className="flowers flex justify-center">
                <details className="dropdown">
                        <summary className="btn btn-success m-1 md:text-2xl font-bold">FLOWER SEEDS</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {categories[2].flowers.map((e, i) => <li><a>{e}</a></li>)}
                        </ul>
                    </details>
                </div>
                <div className="chinese-seeds flex justify-center">
                <details className="dropdown">
                        <summary className="btn btn-success m-1 md:text-2xl font-bold">CHINESE SEEDS</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {categories[3]['chinese-seeds'].map((e, i) => <li><a>{e}</a></li>)}
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default CategoryList