import React from 'react'


const marqueeItems = [
    'Branding',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Website Design'
]

const LoopMarquee = () => {
  return (
    <>
      <div className="overflow-hidden border-b border-[#333] bg-[#1a1a1a] py-2 sm:py-3 lg:py-4 my-8 sm:my-12 lg:my-18">
                <div className="flex whitespace-nowrap [animation:scroll_30s_linear_infinite]">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="inline-flex items-center text-white px-[15px] sm:px-[20px] lg:px-[30px] text-[11px] sm:text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.5px] sm:tracking-[0.8px] lg:tracking-[1px] after:ml-[15px] sm:after:ml-[20px] lg:after:ml-[30px] after:text-[16px] sm:after:text-[18px] lg:after:text-[20px] after:text-[#ff6600] after:content-['•']"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
    </>
  )
}

export default LoopMarquee;
