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
    
    console.log(widget);
    if (!widget) return null;
    return (
        <div dangerouslySetInnerHTML={{ __html: widget }} />
    )

};

export default NutritionWidget;