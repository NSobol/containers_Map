export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [101, 'Switching Protocols — сервер выполняет требование клиента и переключает протоколы в соответствии с указанием, данным в поле заголовка Upgrade'],
      [400, 'Bad Request — сервер обнаружил в запросе клиента синтаксическую ошибку.'],
      [409, 'Conflict — запрос не может быть выполнен из-за конфликтного обращения к ресурсу.'],
      [502, 'Bad Gateway — сервер, выступая в роли шлюза или прокси-сервера, получил недействительное ответное сообщение от вышестоящего сервера.'],
      [504, 'Gateway Timeout — сервер в роли шлюза или прокси-сервера не дождался ответа от вышестоящего сервера для завершения текущего запроса.'],
    ]);
  }

  translate(code) {
    const error = this.errors.get(code);
    if (error) {
      return error;
    }
    return 'Unknown error';
  }
}