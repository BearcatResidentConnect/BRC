class UserAddress(BaseDb):

    _tablename_ = "addresses"

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

    def _init_(self, **kwargs):
        self.user_id = kwargs["user_id"]
        self.address1 = kwargs["address1"]
        self.address2 = kwargs["address2"]
        self.address3 = kwargs["address3"]
        self.city = kwargs["city"]
        self.state = kwargs["state"]
        self.country = kwargs["country"]
        self.default = kwargs["default"]