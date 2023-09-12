import { fetch_ingredientsWidget } from '../api';
import { useEffect, useState } from 'react';

const IngredientsWidget = ({id}) => {

    const [widget, setWidget] = useState(null)

    useEffect(() => {
        fetch_ingredientsWidget(id)
            .then((data) => {
                if (data) {
                    setWidget(data)
                }
            });
    }, [id])
    if (!widget) return null;
    return (
        <>
        <h4 className='mt-5'>Ingredients</h4>
            <div dangerouslySetInnerHTML={{ __html: widget }} />
        </>
        
    )

};

export default IngredientsWidget;