import React, { useState, useEffect } from 'react';
import { Shield, Lock, AlertTriangle, Zap, CheckCircle, Clock, RefreshCw, X } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
  const [progress] = useState(92);
  const [showPopup, setShowPopup] = useState(false);
  const [consoleMessages, setConsoleMessages] = useState([
    '>>> Monitorando rede...',
    '>>> Detecção de IP remoto...',
    '>>> Acesso negado...',
  ]);

  const [systemLogs, setSystemLogs] = useState([
    '>>> Monitorando rede...',
    '>>> Detecção de IP remoto...',
    '>>> Acesso negado...',
    '>>> Firewall de espionagem ativado...'
  ]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const messages = [
      '>>> ENCRYPTED DATA LOCKED...',
      '>>> MONITORING ACTIVE...',
      '>>> SECURITY BREACH DETECTED...',
      '>>> DEFENSE PROTOCOL ENGAGED...',
      '>>> AWAITING AUTHORIZATION...',
    ];

    const interval = setInterval(() => {
      setConsoleMessages(prev => [
        ...prev.slice(-2),
        messages[Math.floor(Math.random() * messages.length)]
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sistema de logs fake rodando
  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev + 1) % systemLogs.length);
    }, 2000);

    return () => clearInterval(logInterval);
  }, [systemLogs]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getUrgencyLevel = () => {
    const minutes = Math.floor(timeLeft / 60);
    if (minutes <= 5) return 'critical';
    if (minutes <= 10) return 'warning';
    return 'normal';
  };

  const getUrgencyText = () => {
    const urgency = getUrgencyLevel();
    switch (urgency) {
      case 'critical':
        return '🛑 TEMPO CRÍTICO: ÚLTIMA CHANCE';
      case 'warning':
        return '⚠️ Quase encerrando...';
      default:
        return '⏳ ALERTA FINAL: Esse canal de desbloqueio será encerrado em até 15 minutos.';
    }
  };

  const handleRevalidateAccess = () => {
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Popup de Revalidação Falhou */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-red-500 rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-red-400">❌ Análise Falhou</h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">
              O sistema exige chave de liberação imediata para descriptografar os dados.
              Nenhuma outra alternativa foi encontrada.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Efeito de piscar para tempo crítico */}
      {getUrgencyLevel() === 'critical' && (
        <div className="fixed inset-0 bg-red-900 opacity-20 animate-pulse pointer-events-none z-10"></div>
      )}

      {/* Barra de Alerta Vermelha */}
      <div className="bg-red-600 text-white py-3 px-4 animate-pulse">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-lg font-bold">
            🛑 URGENTE: VOCÊ ACABA DE PERDER O ACESSO AOS DADOS SECRETOS!
          </div>
          <div className="text-sm mt-1">
            ⚠️ SISTEMA DE DEFESA FOI ATIVADO AUTOMATICAMENTE — AÇÃO NECESSÁRIA IMEDIATAMENTE!
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header com Logo Fictício */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Shield className="w-12 h-12 text-red-500 mr-3" />
            <span className="text-2xl font-mono text-green-400">SpyLock AI</span>
          </div>
          
          {/* Ruído de Legitimidade */}
          <div className="text-sm text-gray-400 mb-6">
            ✔️ Protocolo de segurança nº 0179-8/BR | Status: Encriptação ativa
          </div>

          {/* Log de Sistema Fake Rodando */}
          <div className="bg-black border border-green-400 rounded-lg p-4 mb-6 font-mono text-sm">
            <div className="text-green-400 animate-pulse">
              {systemLogs[currentLogIndex]}
              <span className="animate-ping">_</span>
            </div>
          </div>
          
          {/* Console Messages */}
          <div className="bg-black border border-green-400 rounded-lg p-4 mb-6 font-mono text-sm">
            {consoleMessages.map((message, index) => (
              <div 
                key={index} 
                className={`text-green-400 ${index === consoleMessages.length - 1 ? 'animate-pulse' : ''}`}
              >
                {message}
              </div>
            ))}
          </div>
        </div>

        {/* Título Principal */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4 flex items-center justify-center">
            <Lock className="w-8 h-8 mr-3" />
            ❌ ACESSO NEGADO: DADOS ENCRIPTADOS PELO SISTEMA ANTI-ESPIONAGEM!
          </h1>
          <p className="text-xl text-red-400 font-semibold">
            Você FOI DETECTADO tentando acessar conversas sigilosas!
          </p>
        </div>

        {/* Barra de Progresso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-orange-400">SISTEMA DE PROTEÇÃO ATIVO</span>
            <span className="text-sm font-medium text-orange-400">{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full animate-pulse"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Seção Descritiva */}
        <div className="bg-gray-800 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3">
                O DISPOSITIVO MONITORADO DETECTOU SUA TENTATIVA DE ACESSO!
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Um sistema de blindagem inteligente foi ativado automaticamente, 
                <span className="text-red-400 font-semibold"> CRIPTOGRAFANDO</span> todos os dados em tempo real.
              </p>
              <p className="text-yellow-400 font-semibold mb-4">
                ⚠️ O conteúdo foi <span className="text-red-400">TRAVADO</span>.
              </p>
              <p className="text-green-400">
                Mas <span className="font-bold">AINDA HÁ UMA JANELA DE DESBLOQUEIO ATIVA</span>, 
                antes que os dados sejam apagados <span className="text-red-400 font-bold">PERMANENTEMENTE</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Oferta de Desbloqueio */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-green-500 rounded-lg p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-4">CHAVE DE LIBERAÇÃO DISPONÍVEL</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Para <span className="text-green-400 font-semibold">RECUPERAR o acesso</span> e 
            <span className="text-yellow-400 font-semibold"> DESTRAVAR</span> todas as mensagens, 
            fotos, áudios e arquivos ocultos, é necessária uma chave de liberação exclusiva.
          </p>
          
          <div className="bg-black rounded-lg p-6 mb-6">
            <div className="text-sm text-gray-400 mb-2">Taxa de Liberação do Sistema:</div>
            <div className="text-5xl font-bold text-green-400 mb-2">R$ 17,90</div>
            <div className="text-sm text-yellow-400">Pagamento único - Acesso Permanente</div>
          </div>

          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50 w-full md:w-auto mb-4">
            <Zap className="w-6 h-6 inline mr-2" />
            🔓 LIBERAR ACESSO SECRETO AGORA (ÚLTIMA CHANCE) →
          </button>

          {/* Botão de Revalidar Acesso Falso */}
          <div className="mt-4">
            <button 
              onClick={handleRevalidateAccess}
              className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium py-3 px-6 rounded-lg text-lg transition-all duration-300 border border-gray-600 w-full md:w-auto"
            >
              <RefreshCw className="w-5 h-5 inline mr-2" />
              ❓ Tentar nova análise automática de acesso
            </button>
          </div>
        </div>

        {/* Timer Contagem Regressiva com Urgência Variável */}
        <div className={`border rounded-lg p-6 mb-8 text-center ${
          getUrgencyLevel() === 'critical' ? 'bg-red-900 border-red-400 animate-pulse' :
          getUrgencyLevel() === 'warning' ? 'bg-red-900 border-red-500' :
          'bg-red-900 border-red-500'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Clock className={`w-8 h-8 mr-3 ${
              getUrgencyLevel() === 'critical' ? 'text-red-300 animate-spin' : 'text-red-400 animate-spin'
            }`} />
            <span className={`text-3xl font-mono font-bold ${
              getUrgencyLevel() === 'critical' ? 'text-red-300' : 'text-red-400'
            }`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <h3 className={`text-xl font-bold mb-3 ${
            getUrgencyLevel() === 'critical' ? 'text-red-300' : 'text-red-400'
          }`}>
            {getUrgencyText()}
          </h3>
          <p className="text-gray-300 mb-4">
            Após esse tempo, <span className="text-red-400 font-bold">TODAS as mensagens serão automaticamente 
            CORROMPIDAS, INACESSÍVEIS e DELETADAS DOS SERVIDORES</span>.
          </p>
          <p className="text-red-400 font-bold mb-4">
            Nenhum sistema poderá recuperar. Nem pagando. Nem pedindo. É o fim.
          </p>
          <p className="text-green-400 font-semibold">
            <CheckCircle className="w-5 h-5 inline mr-2" />
            Essa é sua única chance de reativar o acesso escondido.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            PERGUNTAS FREQUENTES - SISTEMA DE SEGURANÇA
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                "Por que preciso pagar essa liberação?"
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Porque o sistema de criptografia foi ativado e o único jeito de destravar os dados 
                é usando uma chave de acesso. Sem isso, o sistema permanece bloqueado para sempre. 
                O valor é apenas para validação do protocolo de segurança.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                "O acesso é realmente permanente?"
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Sim. Uma vez liberado, você terá acesso completo e irrestrito a todos os dados 
                criptografados, sem necessidade de novos pagamentos ou validações.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                "E se eu perder esse prazo?"
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Os dados serão automaticamente destruídos pelo sistema de segurança. 
                Não há como recuperar após o tempo limite. Esta é uma medida de proteção definitiva.
              </p>
            </div>
          </div>
        </div>

        {/* Prova Social Fake */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            CONFIRMAÇÕES DE LIBERAÇÃO RECENTES
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-300 mb-2">
                💬 "Achei que era golpe, mas FUNCIONOU! Recuperei tudo."
              </p>
              <p className="text-sm text-gray-400">— Rafael C.</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-300 mb-2">
                💬 "O sistema trava mesmo! Ainda bem que paguei rápido."
              </p>
              <p className="text-sm text-gray-400">— Ana M.</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-300 mb-2">
                💬 "Funcionou certinho, desbloqueou o que eu precisava."
              </p>
              <p className="text-sm text-gray-400">— Usuário anônimo</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Sistema de Proteção SpyLock AI - Protocolo de Segurança Avançado</p>
          <p className="mt-2">🔒 Seus dados estão protegidos por criptografia militar</p>
        </div>
      </div>
    </div>
  );
}

export default App;