import React, { useEffect } from 'react';

interface ClickData {
    timestamp: string;
    xPosition: number;
    yPosition: number;
}

const ClickTrackingButton: React.FC = () => {
    const data: ClickData[] = [];

    const trackClickAndPosition = (event: MouseEvent) => {
        const clickData: ClickData = {
            timestamp: new Date().toISOString(),
            xPosition: event.clientX,
            yPosition: event.clientY,
        };

        data.push(clickData);
    };

    useEffect(() => {
        document.addEventListener('click', trackClickAndPosition);

        return () => {
            document.removeEventListener('click', trackClickAndPosition);
        };
    }, []);

    const saveDataToCSV = () => {
        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += 'Timestamp,X Position,Y Position\n';

        data.forEach((click) => {
            csvContent += `${click.timestamp},${click.xPosition},${click.yPosition}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'click_data.csv');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <button onClick={saveDataToCSV}>Salvar em CSV</button>
    );
};

export default ClickTrackingButton;
