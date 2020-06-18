from elasticsearch import Elasticsearch

class Database:
    def __init__(self):
        self.__es = Elasticsearch()

    def index(self, index, body):
        try:
            return self.__es.index(
                index=index,
                body=body
            )

        except Exception:
            return None
    
    def search(self, index, body={'query': {'match_all': {}}}):
        try:
            return self.__es.search(
                index=index,
                body=body
            )

        except Exception:
            return None

db = Database()