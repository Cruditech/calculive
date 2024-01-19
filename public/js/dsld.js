/* NIH's Dietary Supplement Label Database (DSLD) */


// let sampleLabel = async () => { 
//     fetch("../samples/label.json")
//     .then(response => response.json())
//     .then(json => return });
// }
// console.log(sampleLabel);

const label = fetch("../samples/label.json").then((res)=>resolve(res.json()));
const rowSample = {
    fullName: "Vitamin C",
    brandName: "Nature's Bounty",
    dosage: "1000 mg",
    frequency: "Once Daily",
};
const sampels = [rowSample, rowSample, rowSample];