import React from 'react'


const marqueeItems = [
    'Branding',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Website Design'
]

const aboutSheet = () => {
  return (
    <>
        <div className="overflow-hidden border-b mt-18 border-[#333] bg-[#1a1a1a] py-4">
                <div className="flex whitespace-nowrap [animation:scroll_30s_linear_infinite]">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="inline-flex text-white items-center px-[30px] text-[14px] font-medium uppercase tracking-[1px] after:ml-[30px] after:text-[20px] after:text-[#ff6600] after:content-['•']"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
    </>
  )
}

export default aboutSheet;
