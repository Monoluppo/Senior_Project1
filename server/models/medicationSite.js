import mongoose from 'mongoose';

const medicationSiteSchema = mongoose.Schema({
    msId: String,
    msName: String,
    msType: String,
    information: String,
    phone: String,
    pic: String,
});

const MedicationSite = mongoose.model('medicationSite',medicationSiteSchema);

export default MedicationSite;
