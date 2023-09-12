import { fetch_nutritionWidget } from '../api'
import { useEffect, useState } from 'react';

const NutritionWidget = ({id}) => {

    const [widget, setWidget] = useState(null)

    useEffect(() => {
        fetch_nutritionWidget(id)
            .then((data) => {
                if (data) {
                    setWidget(data)
                }
            });
    }, [id])
    if (!widget) return null;
    return (
        <>
        <h4 className='mt-5'>Nutritional Information</h4>
            <div dangerouslySetInnerHTML={{ __html: widget }} />
        </>
        
    )

};

export default NutritionWidget;