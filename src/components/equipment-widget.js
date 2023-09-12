import { fetch_equipmentWidget } from '../api';
import { useEffect, useState } from 'react';

const EquipmentWidget = ({id}) => {

    const [widget, setWidget] = useState(null)

    useEffect(() => {
        fetch_equipmentWidget(id)
            .then((data) => {
                if (data) {
                    setWidget(data)
                }
            });
    }, [id])
    if (!widget) return null;
    return (
        <>
        <h4 className='mt-5'>Equipment</h4>
            <div dangerouslySetInnerHTML={{ __html: widget }} />
        </>
        
    )

};

export default EquipmentWidget;