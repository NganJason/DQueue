export const sortOperatingHours = (operatingHours) => {
    const sortedOperatingHours = [...operatingHours];
    sortedOperatingHours.sort((a, b) => {
        return a.day - b.day || a.opening - b.opening;
    });

    const dayIndexedOperatingHours = new Array(7).fill([]);
    sortedOperatingHours.forEach(item => {
        if (dayIndexedOperatingHours[item.day].length === 0)
            dayIndexedOperatingHours[item.day] = [{ opening: item.opening, closing: item.closing }];

        else
            dayIndexedOperatingHours[item.day].push({ opening: item.opening, closing: item.closing });
    })

    return dayIndexedOperatingHours;
}