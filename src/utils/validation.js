export function validateRequiredFields(fields) {
  const errors = {};

  Object.entries(fields).forEach(([field, value]) => {
    if (!value || !String(value).trim()) {
      errors[field] = "This field is required.";
    }
  });

  return errors;
}

export function validateAppointment(fields) {
  const errors = validateRequiredFields({
    ownerId: fields.ownerId,
    petId: fields.petId,
    type: fields.type,
    date: fields.date,
    time: fields.time,
  });

  if (!fields.ownerId) {
    errors.ownerId = "Please select an owner.";
  }

  if (!fields.petId) {
    errors.petId = "Please select a pet.";
  }

  if (!fields.type) {
    errors.type = "Please select an appointment type.";
  }

  if (!fields.date) {
    errors.date = "Please select a date.";
  }

  if (!fields.time) {
    errors.time = "Please select a time.";
  }

  return errors;
}