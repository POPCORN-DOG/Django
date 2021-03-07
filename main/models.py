from django.db import models

# Create your models here.

# 1. Developer: 개발자 유형
class Developer(models.Model):
    name = models.CharField(max_length=50)
    count = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
# 2. Question: 문항
class Question(models.Model):
    number = models.IntegerField(unique=True)
    content = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.number}. {self.content}'
    

# 3. Choice: 선택지
class Choice(models.Model):
    content = models.CharField(max_length=100)
    question = models.ForeignKey(to='main.Question', on_delete=models.CASCADE)
    developer = models.ForeignKey(to='main.developer', on_delete=models.CASCADE, null=True)
    
    def __str__(self):
        return self.content