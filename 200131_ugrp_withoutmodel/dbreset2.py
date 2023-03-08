import sqlite3

#db 연결
conn = sqlite3.connect("user5.db")
#conn.execute("delete from user")
#print("users db deleted : ", conn.execute("delete from user").rowcount, "rows")

cur = conn.cursor()
cur.execute("create table user(id int, model_mbti text, user_mbti text)")
conn.close()
'''
conn = sqlite3.connect("user4.db")
cur = conn.cursor()
num = cur.execute("DELETE FROM user").rowcount

print(num)
'''
