function graphAPI() {
  // Calcular a data de ontem
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var formattedYesterday = Utilities.formatDate(yesterday, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  
  // Construir o URL da API com a data de ontem
  var jsonURL = "https://graph.facebook.com/v17.0/act_2187582351303449/insights?fields=objective,campaign_name,ad_name,adset_name,campaign_id,adset_id,ad_id,impressions,clicks,spend,reach,frequency&date_preset=yesterday&access_token={TOKEN-ACESSO}";
  
  // Fazer a requisição HTTP
  var response = UrlFetchApp.fetch(jsonURL);
  var responseData = JSON.parse(response.getContentText());
  var data = responseData.data;
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Automação - META"); // Altere "Automação - META" para o nome da sua planilha
  
  // Escrever os dados na planilha começando da linha 2
  var startRow = 2;
  var numRows = data.length;
  var numCols = Object.keys(data[0]).length;
  var range = sheet.getRange(startRow, 1, numRows, numCols);
  
  var values = [];
  data.forEach(function (row) {
    var rowData = [];
    for (var key in row) {
      // Formatar valores de 'spend' com vírgulas em vez de pontos
      var value = key === 'spend' ? row[key].toString().replace('.', ',') : row[key];
      rowData.push(value);
    }
    values.push(rowData);
  });
  
  range.setValues(values);
}
