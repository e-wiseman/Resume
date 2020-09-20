import sqlite3


class DataBase:
    def __init__(self, database_name):
        self.database = '{}.db'.format(database_name)

    def _open(self):
        self.connection = sqlite3.connect(self.database)
        self.cursor = self.connection.cursor()

    def _close(self):
        self.connection.close()

    def _fetchall(self, select):
        self._open()
        self.cursor.execute(select)
        data = self.cursor.fetchall()
        self._close()
        return data

    def get_experience(self):
        SELECT = """
        """
        package = [{ 'image': row[0], 'dates': row[1], 'description': row[2] } 
            for row in self._fetchall(SELECT)]
        return package