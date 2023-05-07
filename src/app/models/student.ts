export interface StudentDTO {
  jmbag: string,
  numberOfECTS: number,
  tuitionShouldBePaid: boolean
}

export interface Student extends Omit<StudentDTO, 'tuitionShouldBePaid'>{
  firstName: string,
  lastName: string,
  dateOfBirth: string | null,
}
