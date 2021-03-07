`# Django`
Django-project
<span style="color:red">붉은 색</span>
## ```diff - dd ```

# 1. 클라우드 서비스란?
서비스를 운영하기 위해서는 서버가 필요하다. 그러나 서버를 직접 사기에는 너무 고가이고, 또 배송이 온다고 해서 끝이 아니라 설치를 하는 것도 매우 큰 리소스가 드는 작업! 그래서 이 서버를 빌려서 사용한다. 빌리는 것을 클라우드 서비스라 하고, 이 서비스는 크게 3가지로 나눌 수 있다.

1. **SaaS(Software as a Service)**<br>
가장 사용자 단에 친밀한 서비스이며 네트워크를 통해 애플리케이션 기능을 이용할 수 있는 서비스
2. PaaS(Platform as a Service)<br>
윈도우와 리눅스 같은 운영체제를 제공하고 개발 가능한 플랫폼도 함께 제공되는 클라우드 서비스
3. IaaS(infrastructure as a Service)<br>
인프라를 제공하는 클라우드 서비스 (기업에서 특히 많이 쓰임) AWS!! 

# 2. 구름IDE
설치가 필요없는 클라우드 통합 개발환경(IDE)<br><br>
구름을 사용하는 3가지 이유
1. OS Version, Python Version, Django Version별 에러를 잡는데 시간이 많이 소요된다. 또한 '개발은 배포 환경과 동일하게!'라는 말을 잊지말자. 우리의 리소스를 아껴줄 것이다.
2. 집에 서버와 환경을 구축하는 것은 비용(시간, 금전, 기회 비용)이 상대적으로 크다.
3. 배포를 명령어 한 번으로 진행할 수 있다. 또 구름에서도 서비스를 런칭할 수 있다.

# 3. Django 프로젝트 basic
### https://www.notion.so/MBIT-My-Best-IT-personalities-3d9128d972054b498b98365f1df4e656

## 1) 서버환경 구축과 장고 프로젝트 생성하기 

### 1. venv 모듈을 통해 가상 환경 생성
- [root@goorm:/workspace/MBIT#] python -m venv [가상환경이름]
- [root@goorm:/workspace/MBIT#] python -m venv venv

### 2. 가상환경 실행
- source venv/bin/activate
- 가상환경이 잘 실행되고 있는지 확인하려면 pip list 명령어로
- python 모듈의 리스트를 보자 글로벌 환경일 때와 가상 환경일 떄의 결과가 다르다.

### 3. django 패키지 설치
- pip install django
- successfully installed 메시지가 뜨면 성공적
- pip list 명령어로 확인해보자.

### 4. django 프로젝트 생성
- django-admin startproject [프로젝트 명] [경로]
- django-admin startproject MBIT . (현재경로)
- manage.py파일 생성

### 5. django 프로젝트 실행
- 프로젝트가 정상적으로 잘 생성되었는지 확인하기 위해 다음 명령어를 통해 프로젝트를 실행
- python manage.py runserver 0:80
- 프로젝트 탭 > 실행 URL과 포트에 등록된 URL로 접속하면 오류가 뜨는데, 이는 django 프로젝트가 잘 실행되고 있지만
- 현재 호스트의 접속을 허가하고 있지 않다는 뜻이다. 그래서 모든 호스트에서 접근할 수 있도록
- [프로젝트 명]/settings.py에서 ALLOWED_HOSTS = ['\*'] 이렇게 수정해준다.
- 다시 접속하면 로켓모양 성공!

### 6. 앱 생성
- 이제 해당 프로젝트에서 내가 원하는 기능을 수행하는 앱을 만들어야 한다. 
- python manage.py startapp [앱이름]
- 해당 앱 폴더가 생성된다. **앱을 생성한 뒤에는 반드시 해당 앱을 프로젝트에 등록해 주어야한다.**
- [프로젝트 명]/settings.py에서 INSTALLED_APPS 리스트에 해당 앱 이름을 추가한다.
- **장고에서는 리스트, 튜플, 딕셔너리 등에서 마지막 요소에도 <code>,</code>를 붙이는 것을 권장한다.**

## 2) 모델 작성하기 
- 참고: http://pythonstudy.xyz/python/article/308-Django-%EB%AA%A8%EB%8D%B8-Model
- 모델이란 DB에 저장될 테이블을 정의하는 클래스이다.
- 우리가 작성하고자 하는 모델의 설계는 다음과 같다.
- 모델 클래스는 [해당 앱 폴더]/models.py에 작성한다.
![image](https://user-images.githubusercontent.com/79825411/110242154-1b04fb80-7f98-11eb-8974-d4a0c55bb737.png)

### 1. Developer: 개발자 유형
```python
class Developer(models.Model):
    name = models.CharField(max_Length=50)
    count = models.IntegerField(default=0)
```

### 2. Question: 문항
```python
class Question(models.Model):
    content = models.CharField(max_length=100)
    number = models.IntegerField(unique=True)
```

### 3. Choice: 선택지
```python
class Choice(models.Model):
    content = models.CharField(max_length=100)
    question = models.ForeignKey(to='main.Question', on_delete=models.CASCADE)
    developer = models.ForeignKey(to='main.developer', on_delete=models.CASCADE, null=True)
```



