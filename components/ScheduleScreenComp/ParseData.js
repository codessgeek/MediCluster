//import React from 'react'



const ParseData = (dummy) => {
    const ans = {};
    let hour = 0;

    dummy.forEach(dataItem => {
        if (!(dataItem.date in ans)) {
            ans[dataItem.date] = { 0: [], 1: [], 2: [], 3: [] };
        }

        hour = parseInt(dataItem.time.split(':')[0]);

        if (hour >= 20) ans[dataItem.date][3].push(dataItem);
        else if (hour >= 17) ans[dataItem.date][2].push(dataItem);
        else if (hour >= 11) ans[dataItem.date][1].push(dataItem);
        else ans[dataItem.date][0].push(dataItem);
    });

    return ans
}

export default ParseData