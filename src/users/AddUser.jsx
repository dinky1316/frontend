import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  // 리액트 돔의 네비게이트를 쓰면 더 편리하고 빠르다
  // 네비게이트 객체 생성
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      // 입력한 값을 name 으로  // 객체안에 변수를 쓸때는 대괄호
      [e.target.name]: e.target.value,
    });
  };

  // 구조 분해 할당 // 이렇게 분해를 해버리면 user.name 안하고 name 만 써도 user의 name인걸 안다
  const { name, username, email } = user;

  // 폼의 가입 버튼을 눌렀을때 이벤트
  const onSubmit = async (e) => {
    e.preventDefault(); // 기본 전송 기능 중지
    // 백엔드 서버로 user데이터 전송
    await axios.post("http://localhost:8080/user", user); // 전송할 데이터 뒤에 표시
    // 바로 홈페이지로 이동(리스트에 새 유저가 보임)
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">가입 하기</h2>
            {/* onSubmit : 버튼을 누르면 발생 */}
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  이름
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  value={name}
                  onChange={onInputChange}
                  className="form-control"
                  placeholder="이름 입력"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  유저 네임
                </label>
                <input
                  required
                  type="text"
                  id="username"
                  value={username}
                  onChange={onInputChange}
                  className="form-control"
                  placeholder="유저 네임 입력"
                  name="username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  이메일
                </label>
                <input
                  required
                  type="text"
                  id="email"
                  value={email}
                  onChange={onInputChange}
                  className="form-control"
                  placeholder="이메일 입력"
                  name="email"
                />
              </div>
              <div className="mb-3 text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-3 mx-2"
                >
                  가입
                </button>
                <Link to="/" className="btn btn-outline-dark px-3 mx-2">
                  취소
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
