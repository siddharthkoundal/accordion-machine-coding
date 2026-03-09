import { useState } from "react";

type AccordionItem = {
    title: string;
    content: string;
};

type AccordionProps = {
    items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
    const [showContentIndex, setShowContentIndex] = useState<number | null>(null);

    return (
        <div className='accordion'>
            {items.map((item, index) => (
                <div className='accordion-container' key={index}>
                    <div
                        className='accordion-title'
                        onClick={() => setShowContentIndex(showContentIndex === index ? null : index)}
                    >
                        {item.title}
                    </div>
                    {showContentIndex === index &&
                        <div className='accordion-content'>{item.content}</div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Accordion;