### -pom.xml 필수 : common dbcp

### -데이터 소스 : JDBC템플릿을 사용할때 데이터베이스를 사용하기위한 ulr,password등 을 담고있는 것

### -jdbc 템플릿 사용 메소드:
 	update(): insert, update, delete
 	queryForInt() : 셀렉트로 검색된 개수 정수값
	queryForObject(): 셀렉 구문의 실행  결과를 VO객체로 리턴, rowMapper 
 	query(): 셀렉트 실행 결과가 목록일때

### -rowMapper: 레코드를 주머니에 담아서 주는것(자동적으로 마지막 레코드까지 주머니에담아서 리턴해줌)
#### 	maprow(resultSet, int(레코드 값))

<pre>
<code>

     private final String BOARD_GET = "select * from board where seq=?";
    public BoardVO getBoard(BoardVO vo) {
		System.out.println("===> spring jdbc getBoard");
		Object[] args= {vo.getSeq()};
		return jdbcTemplate.queryForObject(BOARD_GET, args, new BoardRowMapper());
	}


</code>
</pre>

<pre>
<code>

    private final String BOARD_LIST = "select * from board order by seq desc";
    public List<BoardVO> getBoardList(BoardVO vo) {
		System.out.println("===> spring jdbc getBoardList");
		return jdbcTemplate.query(BOARD_LIST,new BoardRowMapper());
	}

</code>
</pre>

### -JDBC 템플릿 사용
     jdbc util 클래스 없음
     데이터 소스 설정(property):
         <context: property> 사용해서 값을 외부 파일에서 받아옴
	

        ex) jdbc.driver=com.mysql.cj.jdbc.Driver
            jdbc.url=jdbc:mysql://localhost:3307/springdb?serverTimezone=UTC&useSSL=false&characterEncoding=utf-8
            jdbc.username=root
            jdbc.password=dongyan




### 트렌젝션 매니저
####	<tx:advicd> 트랜잭션 매니저 사용 태그
####	메서드 이름을 모르는 경우엔 에스펙트 사용 못함, 어드바이저 태그 이용해야한다.
#### 	트랜잭션 매니저는 메서드 이름을 모르기 떄문에 어드바이저 태그 이용
	 ex)insert 실행할때 트랜젝션 필요 왜냐 삽입하다가 중간에 멈추면 롤백
	    delete 실행 할때 트랜젝션 필요
	    select 실행 할때 트랜젝션 필요없음



