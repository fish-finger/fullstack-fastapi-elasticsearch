from elasticsearch import Elasticsearch

class Database:
    def __init__(self):
        self.__es = Elasticsearch(['database'], port=9200)

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
            self.__es.indices.refresh(index=index)
            return self.__es.search(
                index=index,
                body=body
            )

        except Exception:
            return None

db = Database()