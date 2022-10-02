import enum

from sqlalchemy import (
    Column,
    ForeignKey,
    Boolean,
    Integer,
    BigInteger,
    Float,
    String,
    DateTime,
    LargeBinary,
    Enum,
    func,
)

from sqlalchemy.orm import relationship

from ..database import BaseDb


class User(BaseDb):

    __tablename__ = "users"

    user_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    sid = Column(String(10), unique=True, nullable=True)
    #
    user_name = Column(String(255), nullable=False, unique=True, index=True)
    password = Column(String(255), nullable=False)  # Hashed Password
    #
    created = Column(DateTime, nullable=False, default=func.now())
    updated = Column(DateTime, nullable=False, default=func.now())
    #
    # name = Column(String(80), nullable=False)
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    active = Column(Boolean, default=True)
    #avatar = Column(LargeBinary(length=2048), nullable=True)  # MAx of 2 MB
    avatar = Column(String(255), nullable=True)  # MAx of 2 MB

    def __init__(self, **kwargs):
        self.sid = kwargs["sid"]
        self.user_name = kwargs["user_name"]
        self.password = kwargs["password"]
        self.created = kwargs["created"]
        self.updated = kwargs["updated"]
        self.first_name = kwargs["first_name"]
        self.last_name = kwargs["last_name"]
        self.email = kwargs["email"]
        self.active = kwargs["active"]
        self.avatar = kwargs["avatar"]


class Address(BaseDb):

    __tablename__ = "addresses"

    address_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    address1 = Column(String(255), nullable=False)
    address2 = Column(String(255), nullable=True)
    address3 = Column(String(255), nullable=True)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    country = Column(String(2), nullable=False)
    default = Column(Boolean, default=False)

    def __init__(self, **kwargs):
        self.user_id = kwargs["user_id"]
        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.default = kwargs["default"]


class UserAddresses(BaseDb):

    __tablename__ = "user_addresses"

    user_address_id = Column(BigInteger, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False)
    address_id = Column(BigInteger, ForeignKey("addresses.address_id"), nullable=False)
    
class UserPosting(BaseDb):
    
    __tablename__ = "user_postings"

    posting_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    available_date = Column(DateTime, nullable=True, default=None)
    accomedation_type = Column(String(10), nullable=False, default="Temporary") #Temporary or Permanaent
    num_days = Column(Integer, nullable=False, default=7)
    
class UserAccomedation(BaseDb):
    
    __tablename__ = "user_accomedations"

    accomedatiom_id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    #
    user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    accomedated_user_id = Column(BigInteger, ForeignKey("users.user_id"), nullable=False) # FK
    confirmed_date = Column(DateTime, nullable=True, default=None)
    accomedated_date = Column(DateTime, nullable=True, default=None)
    accomedation_type = Column(String(10), nullable=False, default="Temporary") #Temporary or Permanaent
    rating = Column(Integer, nullable=False, default=0)
    num_days = Column(Integer, nullable=False, default=7)
    
    
# class SuperUser(BaseDb):
#     __tablename__ = "super_user"

#     id = Column(Integer, primary_key=True, autoincrement=True, index=True)
#     sis_id = Column(Integer, unique=True, index=True, nullable=False)
#     #
#     name = Column(String(80), nullable=False)
#     email = Column(String(120), unique=True, nullable=False)
#     first_name = Column(String(80), nullable=False)
#     last_name = Column(String(80), nullable=False)
#     user_name = Column(String(80), nullable=False, unique=True)
#     password = Column(String(300), nullable=False)
#     active = Column(Boolean, default=True, nullable=False)
#     # department = Column(String(80), nullable=False)

#     def __init__(self, **kwargs):
#         self.sis_id = kwargs["sis_id"]
#         self.name = kwargs["name"]
#         self.email = kwargs["email"]
#         self.first_name = kwargs["first_name"]
#         self.last_name = kwargs["last_name"]
#         self.user_name = kwargs["user_name"]
#         self.password = kwargs["password"]
#         self.active = kwargs["active"]
#         # self.department = kwargs["department"]


# class Section(BaseDb):
#     __tablename__ = "sections"

#     id = Column(Integer, primary_key=True, autoincrement=True)  # surrogate key
#     course_sis_section_id = Column(
#         String(100), primary_key=True, index=True, nullable=False
#     )
#     #
#     last_activity_at = Column(DateTime)
#     total_activity_time = Column(Integer, default=0)

#     # ForeignKey's
#     faculty_id = Column(Integer, ForeignKey("users.sis_id"), nullable=False)
#     term_id = Column(String(20), ForeignKey("terms.term_id"), nullable=False)
#     course_sis_id = Column(
#         String(100), ForeignKey("courses.course_sis_id"), nullable=False
#     )

#     # Relation's
#     # 'user' var is referenced in User.sections => back_populates \
#     # and 'sections' var referenced here is from User.sections
#     user = relationship("User", back_populates="sections")
#     term = relationship("Term", back_populates="sections")
#     course = relationship("Course", back_populates="sections")
#     # 1
#     survey = relationship("Survey", back_populates="section")
#     # mul
#     enrollments = relationship("StudentEnrollment", back_populates="section")
#     # 1
#     student_participation = relationship(
#         "StudentParticipation", back_populates="section"
#     )

#     def __init__(self, **kwargs):
#         self.course_sis_section_id = kwargs["course_sis_section_id"]
#         self.last_activity_at = kwargs["last_activity_at"]
#         self.total_activity_time = kwargs["total_activity_time"]
#         self.faculty_id = kwargs["faculty_id"]
#         self.term_id = kwargs["term_id"]
#         self.course_sis_id = kwargs["course_sis_id"]

#     def to_json(self):

#         return {"Section_Id": self.course_sis_section_id, "User": self.user_id}


# class Term(BaseDb):
#     __tablename__ = "terms"

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     term_id = Column(String(20), primary_key=True, unique=True, index=True)

#     #
#     term_name = Column(String(80), unique=True, nullable=False)
#     term_start_date = Column(DateTime, nullable=False)
#     term_end_date = Column(DateTime, nullable=False)

#     # Relation's
#     sections = relationship("Section", back_populates="term")

#     def __init__(self, **kwargs):
#         self.term_id = kwargs["term_id"]
#         self.term_name = kwargs["term_name"]
#         self.term_start_date = kwargs["term_start_date"]
#         self.term_end_date = kwargs["term_end_date"]

#     def to_json(self):
#         return {"Term_Id": self.term_id, "Term_Name": self.term_name}


# class Course(BaseDb):
#     __tablename__ = "courses"

#     id = Column(Integer, primary_key=True, autoincrement=True)  # surrogate key
#     course_sis_id = Column(String(100), primary_key=True, unique=True, nullable=False)

#     #
#     course_name = Column(String(100), nullable=False)
#     course_description = Column(String(1000), nullable=False)
#     total_students_enrolled = Column(Integer, default=0)
#     course_start_date = Column(DateTime, nullable=True)
#     course_end_date = Column(DateTime, nullable=True)
#     department = Column(String(100), nullable=True)
#     mean_graded_days = Column(Integer, default=0)
#     drop_out_rate = Column(Float, default=0)
#     work_flow_status = Column(String(20), default="NA")  # NR
#     published = Column(Integer, default=1)

#     # Relation's
#     sections = relationship("Section", back_populates="course")

#     def __init__(self, **kwargs):
#         self.course_sis_id = kwargs["course_sis_id"]
#         self.course_name = kwargs["course_name"]
#         self.course_description = kwargs["course_description"]
#         self.total_students_enrolled = kwargs["total_students_enrolled"]
#         self.course_start_date = kwargs["course_start_date"]
#         self.course_end_date = kwargs["course_end_date"]
#         self.department = kwargs["department"]
#         self.mean_graded_days = kwargs["mean_graded_days"]
#         self.drop_out_rate = kwargs["drop_out_rate"]
#         self.work_flow_status = kwargs["work_flow_status"]
#         self.published = kwargs["published"]

#     def to_json(self):
#         return {"Course_Sis_Id": self.course_sis_id, "Course_Name": self.course_name}


# class Survey(BaseDb):
#     __tablename__ = "surveys"

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     course_sis_section_id = Column(
#         String(100),
#         ForeignKey("sections.course_sis_section_id"),
#         primary_key=True,
#         unique=True,
#         nullable=False,
#     )

#     #
#     survey_name = Column(String(200), nullable=False)
#     start_date = Column(DateTime)
#     end_date = Column(DateTime)
#     total_responsers = Column(Integer, default=0)
#     total_responded = Column(Integer, default=0)
#     mean_value = Column(Float, default=0)

#     # Relations's
#     # 1
#     section = relationship("Section", back_populates="survey")
#     # mul
#     survey_responses = relationship("SurveyResponse", back_populates="survey")

#     def __init__(self, **kwargs):
#         self.survey_name = kwargs["survey_name"]
#         self.start_date = kwargs["start_date"]
#         self.end_date = kwargs["end_date"]
#         self.total_responsers = kwargs["total_responsers"]
#         self.total_responded = kwargs["total_responded"]
#         self.mean_value = kwargs["mean_value"]
#         self.course_sis_section_id = kwargs["course_sis_section_id"]

#     def to_json(self):
#         return {
#             "Section_Id": self.course_sis_section_id,
#             "Survey_Name": self.survey_name,
#         }


# class SurveyResponse(BaseDb):
#     __tablename__ = "survey_responses"

#     id = Column(Integer, primary_key=True, autoincrement=True)

#     #
#     question_id = Column(
#         Integer, ForeignKey("survey_questions.question_id"), nullable=False
#     )
#     response_value = Column(Float, default=0)

#     # ForeignKey's
#     course_sis_section_id = Column(
#         String(100), ForeignKey("surveys.course_sis_section_id"), nullable=False
#     )

#     # Relation's
#     # 1
#     survey = relationship("Survey", back_populates="survey_responses")
#     # 1
#     survey_question = relationship("SurveyQuestion", back_populates="survey_responses")

#     def __init__(self, **kwargs):
#         self.question_id = kwargs["question_id"]
#         self.response_value = kwargs["response_value"]
#         self.course_sis_section_id = kwargs["course_sis_section_id"]

#     def to_json(self):
#         return {"Section_Id": self.course_sis_section_id}


# class SurveyQuestion(BaseDb):
#     __tablename__ = "survey_questions"

#     question_id = Column(Integer, primary_key=True)

#     #
#     question_type = Column(String(80), nullable=False)
#     question_text = Column(String(200), nullable=False)

#     # Relations
#     survey_responses = relationship("SurveyResponse", back_populates="survey_question")

#     def __init__(self, **kwargs):
#         self.question_id = kwargs["question_id"]
#         self.question_type = kwargs["question_type"]
#         self.question_text = kwargs["question_text"]

#     def to_json(self):
#         return {"Question_Id": self.question_id}


# class Student(BaseDb):
#     __tablename__ = "students"

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     student_id = Column(
#         Integer, primary_key=True, unique=True, index=True
#     )  # Unique User Id from Canvas

#     #
#     student_name = Column(String(100), nullable=False)
#     student_login_id = Column(
#         String(20), nullable=False, unique=True, index=True
#     )  # Sid

#     # Relation's
#     # mul
#     enrollments = relationship("StudentEnrollment", back_populates="student")

#     def __init__(self, **kwargs):
#         self.student_id = kwargs["student_id"]
#         self.student_name = kwargs["student_name"]
#         self.student_login_id = kwargs["student_login_id"]

#     def to_json(self):
#         return {
#             "student_login_id": self.student_login_id,
#             "student_name": self.student_name,
#         }


# class StudentEnrollment(BaseDb):
#     __tablename__ = "student_enrollments"

#     id = Column(Integer, primary_key=True, autoincrement=True)  # surrogate key
#     #
#     student_enrollment_id = Column(Integer)  # Not Unique from Canvas ??
#     student_login_id = Column(String(20))
#     # ForeignKey's
#     student_id = Column(
#         Integer, ForeignKey("students.student_id")
#     )  # Unique User Id from Canvas
#     course_sis_section_id = Column(
#         String(100), ForeignKey("sections.course_sis_section_id"), nullable=False
#     )

#     # Relation's
#     # 1
#     student = relationship(
#         "Student", back_populates="enrollments"
#     )  # , cascade="all,delete")
#     section = relationship("Section", back_populates="enrollments")

#     def __init__(self, **kwargs):
#         self.student_enrollment_id = kwargs["student_enrollment_id"]
#         self.student_login_id = kwargs["student_login_id"]
#         self.course_sis_section_id = kwargs["course_sis_section_id"]
#         self.student_id = kwargs["student_id"]

#     def to_json(self):
#         return {
#             "student_enrollment_id": self.student_enrollment_id,
#             # "student_login_id": self.student_login_id,
#         }


# class StudentParticipation(BaseDb):
#     __tablename__ = "student_participations"

#     id = Column(Integer, primary_key=True, autoincrement=True)  # surrogate key

#     #
#     avg_assignment_submission_rate = Column(Float, default=0)
#     avg_late_submission_rate = Column(Float, default=0)
#     # avg_missing_rate = Column(Float, default=0)
#     avg_on_time_submission_rate = Column(Float, default=0)
#     avg_realtive_participatiton_rate = Column(Float, default=0)
#     avg_relative_page_view_rate = Column(Float, default=0)
#     avg_activity_time = Column(Float, default=0)
#     avg_score = Column(Float, default=0)

#     # ForeignKey's
#     enrollment_id = Column(
#         Integer, ForeignKey("student_enrollments.id")
#     )  # Surrogate key Mapping
#     course_sis_section_id = Column(
#         String(100), ForeignKey("sections.course_sis_section_id")
#     )

#     # Relation's
#     # 1
#     section = relationship("Section", back_populates="student_participation")

#     def __init__(self, **kwargs):
#         self.avg_assignment_submission_rate = kwargs["avg_assignment_submission_rate"]
#         self.avg_late_submission_rate = kwargs["avg_late_submission_rate"]
#         self.avg_on_time_submission_rate = kwargs["avg_on_time_submission_rate"]
#         self.avg_realtive_participatiton_rate = kwargs[
#             "avg_realtive_participatiton_rate"
#         ]
#         self.avg_relative_page_view_rate = kwargs["avg_relative_page_view_rate"]
#         self.avg_activity_time = kwargs["avg_activity_time"]
#         #
#         self.avg_score = kwargs["avg_score"]
#         self.enrollment_id = kwargs["enrollment_id"]
#         self.course_sis_section_id = kwargs["course_sis_section_id"]

#     def to_json(self):
#         return {}


# class Comment(BaseDb):
#     __tablename__ = "comments"

#     id = Column(Integer, primary_key=True, autoincrement=True)

#     #
#     comment_text = Column(String(80), default="NA")
#     comment_date = Column(DateTime, default=func.current_timestamp())
#     is_flag_comment = Column(Boolean, default=False)

#     # ForeignKey's
#     comment_by = Column(Integer, ForeignKey("users.sis_id"))
#     comment_to = Column(Integer, ForeignKey("users.sis_id"))

#     # Relation's
#     # 1
#     comments_by_user = relationship(
#         "User",
#         back_populates="comments_given",
#         uselist=False,
#         foreign_keys=[comment_by],
#     )
#     comments_to_user = relationship(
#         "User", back_populates="comments_got", uselist=False, foreign_keys=[comment_to]
#     )

#     def __init__(self, **kwargs):
#         self.comment_text = kwargs["comment_text"]
#         self.comment_date = kwargs["comment_date"]
#         self.is_flag_comment = kwargs["is_flag_comment"]
#         self.comment_by = kwargs["comment_by"]
#         self.comment_to = kwargs["comment_to"]

#     def to_json(self):
#         return {}


# class HiringInfo(BaseDb):
#     __tablename__ = "hiring_info"

#     id = Column(Integer, primary_key=True, autoincrement=True)
#     sis_id = Column(
#         Integer, ForeignKey("users.sis_id"), primary_key=True, unique=True, index=True
#     )

#     #
#     email = Column(String(100), nullable=False)
#     phone = Column(String(300), nullable=False)
#     address = Column(String(100), nullable=False)
#     city = Column(String(100), nullable=False)
#     state = Column(String(100), nullable=False)
#     zip = Column(String(100), nullable=False)
#     country = Column(String(100), nullable=False)
#     hired_department = Column(String(100), nullable=False)
#     first_hiring_courses = Column(String(100), nullable=False)
#     hired_term = Column(String(100), nullable=False)
#     pay_rate = Column(Float, nullable=False)
#     hired_date = Column(DateTime, default=func.current_timestamp())

#     # Relation's
#     # 1
#     user = relationship("User", back_populates="hiring_info")

#     def __init__(self, **kwargs):
#         self.sis_id = kwargs["sis_id"]
#         self.phone = kwargs["phone"]
#         self.address = kwargs["address"]
#         self.city = kwargs["city"]
#         self.state = kwargs["state"]
#         #
#         self.zip = kwargs["zip"]
#         self.country = kwargs["country"]
#         self.hired_department = kwargs["hired_department"]
#         self.first_hiring_courses = kwargs["first_hiring_courses"]
#         self.hired_term = kwargs["hired_term"]
#         #
#         self.pay_rate = kwargs["pay_rate"]
#         self.hired_date = kwargs["hired_date"]

#     def to_json(self):
#         return {}
