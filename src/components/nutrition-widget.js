import { fetch_nutritionWidget } from '../api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NutritionWidget = () => {

    const params = useParams();
    const id = params['id'];

    const [widget, setWidget] = useState(null)

    useEffect(() => {
        fetch_nutritionWidget(id)
            .then((data) => {
                if (data != null) {
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