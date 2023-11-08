export const COMMON_MESSAGES = {
  VALIDATION_ERROR: 'Lỗi xác thực',
  PAGE_MUST_BE_A_POSITIVE_INTEGER: 'Page phải là số nguyên dương',
  LIMIT_MUST_BE_A_POSITIVE_INTEGER_LESS_THAN_100: 'Limit phải là số nguyên dương nhỏ hơn 100'
} as const;

export const USERS_MESSAGES = {
  REGISTRATION_SUCCESSFUL: 'Đăng ký thành công',
  EMAIL_IS_REQUIRED: 'Email là bắt buộc',
  EMAIL_IS_INVALID: 'Email không hợp lệ',
  EMAIL_ALREADY_EXISTS: 'Email đã tồn tại',
  PASSWORD_IS_REQUIRED: 'Mật khẩu là bắt buộc',
  PASSWORD_IS_INVALID: 'Mật khẩu phải có độ dài từ 6 đến 32 ký tự',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Xác nhận mật khẩu là bắt buộc',
  CONFIRM_PASSWORD_NOT_MATCH: 'Xác nhận mật khẩu không khớp',
  EMAIL_NOT_FOUND: 'Email không tồn tại trên hệ thống',
  EMAIL_OR_PASSWORD_INCORRECT: 'Email hoặc mật khẩu không chính xác',
  LOGIN_SUCCESSFUL: 'Đăng nhập thành công',
  LOGOUT_SUCCESSFUL: 'Đăng xuất thành công',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token là bắt buộc',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Refresh token đã được sử dụng hoặc không tồn tại',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token là bắt buộc',
  REFRESH_TOKEN_SUCCESSFUL: 'Refresh token thành công'
} as const;

export const BLOGS_MESSAGES = {
  CREATE_BLOG_SUCCESSFUL: 'Tạo blog thành công',
  BLOG_TITLE_IS_REQUIRED: 'Tiêu đề blog là bắt buộc',
  BLOG_CONTENT_IS_REQUIRED: 'Nội dung blog là bắt buộc',
  BLOG_AUDIENCE_IS_INVALID: 'Đối tượng đọc blog không hợp lệ',
  BLOG_ID_IS_REQUIRED: 'ID blog là bắt buộc',
  BLOG_ID_IS_INVALID: 'ID blog không hợp lệ',
  BLOG_IS_NOT_EXISTED: 'Blog không tồn tại',
  UPDATE_BLOG_SUCCESSFUL: 'Cập nhật blog thành công',
  BLOG_AUTHOR_IS_INVALID: 'Bạn không phải là tác giả của blog này',
  BLOG_IDS_IS_REQUIRED: 'Danh sách ID blog là bắt buộc',
  BLOG_IDS_MUST_BE_AN_ARRAY: 'Danh sách ID blog phải là một mảng',
  BLOG_IDS_MUST_NOT_BE_EMPTY: 'Danh sách ID blog không được rỗng',
  BLOG_IDS_IS_INVALID: 'Danh sách ID blog không hợp lệ'
} as const;
