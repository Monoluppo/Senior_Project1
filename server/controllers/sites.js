import MedicationSite from '../models/medicationSite.js'
export const getSites = async (req, res) => {
    try {
        const sites = await MedicationSite.find(); 
        console.log(sites);
        res.status(200).json(sites);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createSite = (req, res) => {
    const sites = req.body;
    const newSite = new MedicationSite(sites);

    try {
        newSite.save();
        res.status(201).json(newSite);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}