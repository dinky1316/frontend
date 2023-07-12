import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();

  // 요청 주소의 id값을 받음
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  // 앱 실행시 한번 실행
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // async는 만약 함수라면 function 앞에 붙임
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    // useParam을 써서 아이디를 받아오고, 그걸로 유저의 정보를 찾고, 그걸 표시
    setUser(result.data);
  };

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
    // 수정이라서 put,   id 값
    await axios.put(`http://localhost:8080/user/${id}`, user); // 전송할 데이터 뒤에 표시
    // 바로 홈페이지로 이동(리스트에 새 유저가 보임)
    navigate("/");
  };
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">정보 수정 하기</h2>
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
                  수정
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

export default EditUser;
