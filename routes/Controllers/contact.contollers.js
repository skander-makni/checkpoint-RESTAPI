const Contact = require("../../model/Contact");

const getcontact = async (req, res) => {
  try {
    const listofcontacts = await Contact.find();
    res.status(200).send({ msg: "this the list of contacts", listofcontacts });
  } catch (error) {
    res.status(400).send({ msg: "can not getallcontacts", error });
  }
};
const addcontact = async (req, res) => {
  try {
    const newContact = req.body;
    if (!newContact.name || !newContact.email) {
      return res.status(400).send({ msg: "name and email are required" });
    }
    const contacttofind = await Contact.findOne({ email: newContact.email });
    if (contacttofind) {
      return res.status(400).send({ msg: "contact alrezad exists" });
    }
    const contacttoadd = new Contact(newContact);
    await contacttoadd.save();
    res.status(200).send({ msg: "Contact added succ", contacttoadd });
  } catch (error) {
    res.status(400).send({ msg: "can not added", error });
  }
};
const deletecontact = async (req, res) => {
  try {
    const contactid = req.params.id;
    await Contact.deleteOne({ id: contactid });
    res.status(200).send({ msg: "conatactdeleted succ..." });
  } catch (error) {
    res.status(400).send({ msg: "can not delete", error });
  }
};
const getonecontact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contacttofind = await Contact.findOne({ _id });
    res.status(200).send({ ms: "i find the contact", contacttofind });
  } catch (error) {
    res.status(400).send({ msg: "can not find", error });
  }
};
const updatecontact = async (req, res) => {
  try {
    const { _id } = req.params;
    const newContact = req.body;

    await Contact.updateOne({ _id }, { $set: { ...newContact } });
    // console.log(result);
    // if (result.nModified === 0) {
    //   return res.status(400).send({ msg: "contact already updated" });
    // }
    res.status(200).send({ msg: "contact updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update ", error });
  }
};

module.exports = controllers = {
  getcontact,
  addcontact,
  deletecontact,
  getonecontact,
  updatecontact,
};
