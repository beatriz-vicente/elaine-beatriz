/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  Music, 
  Code, 
  Baby, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { GIFT_LIST, GiftItem, PIX_KEY, ACCOUNT_HOLDER } from './constants';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CategoryIcon = ({ category }: { category: GiftItem['category'] }) => {
  switch (category) {
    case 'Italy': return <MapPin className="w-4 h-4 text-olive" />;
    case 'Spain': return <MapPin className="w-4 h-4 text-terracotta" />;
    case 'Home': return <Heart className="w-4 h-4 text-sun" />;
    case 'Family': return <Baby className="w-4 h-4 text-pink-400" />;
    default: return null;
  }
};

const GiftIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'brinde-noivas': return '🥂';
    case 'jantar-romantico': return '🍝';
    case 'kit-quarto': return '🛌';
    case 'sache-gatinhos': return '🐈';
    case 'cegonha-caminho': return '👶';
    case 'enxoval-livros': return '📚';
    case 'tapas-canas': return '🍻';
    case 'passeio-como': return '⛵';
    case 'jantar-sevilha': return '🕯️';
    case 'churros-madrid': return '☕';
    case 'bairro-gotico': return '🧱';
    case 'luminaria-beatriz': return '💡';
    default: return '🎁';
  }
};

export default function App() {
  const [selectedItem, setSelectedItem] = useState<GiftItem | null>(null);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header */}
      <header className="px-10 py-8 flex flex-col md:flex-row justify-between items-center md:items-end border-b-2 border-dashed border-terracotta gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="nerd-stamp inline-block">// Hello, World. Hello, Love.</div>
          <h1 className="text-5xl text-terracotta italic font-serif">Elaine & Beatriz</h1>
          <p className="max-w-2xl text-text/80 text-sm leading-relaxed">
            Obrigada por fazerem parte da nossa história. Nossa lua de mel sairá do <em>Lago di Como</em> com destino final a <em>Madrid</em>. 
            Sua presença é o maior presente, mas se quiser nos brindar, aqui estão alguns mimos facultativos.
          </p>
        </div>
        <div className="text-center md:text-right space-y-1">
          <div className="text-3xl font-serif text-olive italic">18.04.2026</div>
          <div className="text-[10px] uppercase tracking-[3px] text-text/60">Lago Di Como ➔ Barcelona ➔ Valencia ➔ Sevilha ➔ Cordoba ➔ Granada ➔ Madrid </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 p-10">
        {/* Sidebar */}
        <aside className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="photo-frame"
          >
            <img 
              src="/assets/noivas.jpeg" 
              alt="Elaine e Beatriz" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 text-[10px] font-serif text-white drop-shadow-md font-bold">.   Elaine & Beatriz (e gatinhos)</div>
          </motion.div>

          <div className="bg-white p-6 rounded-[20px] border border-black/5 space-y-4 shadow-sm">
            <div className="space-y-1">
              <strong className="block text-olive text-sm font-serif italic text-center">Chave PIX das Noivas</strong>
            </div>
            <div className="flex items-center bg-cream/50 rounded-xl border border-sun/20 overflow-hidden shadow-sm">
              <code className="flex-grow px-3 py-2 text-[11px] font-mono text-olive truncate">
                {PIX_KEY}
              </code>
              <Button 
                variant="ghost" 
                size="sm"
                className="rounded-none border-l border-sun/20 text-olive h-full text-xs px-3 hover:bg-sun/10"
                onClick={() => navigator.clipboard.writeText(PIX_KEY)}
              >
                Copiar
              </Button>
            </div>
            <p className="text-[10px] text-text/60 leading-tight text-center">Contribuição direta para o enxoval das noivas.</p>
          </div>

          <div className="italic text-xs text-text/70 border-l-2 border-sun pl-4 py-1">
            "A vida é uma jornada que fica melhor quando compartilhamos tapas e canções."
          </div>

          <div className="flex justify-center gap-4 opacity-30 pt-4">
            <Music className="w-5 h-5" />
            <Heart className="w-3 h-3 text-terracotta fill-terracotta self-center" />
            <Code className="w-5 h-5" />
          </div>
        </aside>

        {/* Gift Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {GIFT_LIST.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Dialog>
                  <DialogTrigger 
                    className="gift-card-theme w-full text-center group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-3xl mb-3"><GiftIcon id={item.id} /></div>
                      <h3 className="text-sm font-bold leading-tight mb-2 group-hover:text-terracotta transition-colors">{item.title}</h3>
                      <p className="text-[11px] text-text/60 line-clamp-2 mb-4 px-2">{item.description}</p>
                    </div>
                    <div className="flex justify-between items-center w-full border-t border-sun/10 pt-3">
                      <span className="text-[12px] font-bold text-olive">
                        {item.suggestedValue 
                          ? `R$ ${item.suggestedValue.toFixed(2).replace('.', ',')}` 
                          : 'Valor Livre'}
                      </span>
                      <Sparkles className="w-3 h-3 text-sun opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] max-w-sm rounded-3xl bg-cream border-none shadow-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif italic text-center text-terracotta">Contribuir</DialogTitle>
                      <DialogDescription className="text-center font-serif italic text-sm text-text/70">
                        {item.title}
                        {item.suggestedValue && (
                          <span className="block text-[10px] mt-1 text-olive not-italic font-sans font-bold">
                            Sugestão: R$ {item.suggestedValue.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center p-4 space-y-6">
                      <div className="w-full space-y-2">
                        <p className="text-[10px] uppercase tracking-widest text-center text-text/40">Chave PIX (Copie e Cole)</p>
                        <div className="flex items-center bg-white rounded-xl border border-sun/20 overflow-hidden shadow-sm">
                          <code className="flex-grow px-3 py-2 text-xs font-mono text-olive truncate">
                            {PIX_KEY}
                          </code>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="rounded-none border-l border-sun/20 text-olive h-full text-xs px-3 hover:bg-sun/10"
                            onClick={() => navigator.clipboard.writeText(PIX_KEY)}
                          >
                            Copiar
                          </Button>
                        </div>
                      </div>
                      <p className="text-[10px] text-center text-text/40 leading-tight">
                        Use a chave acima no aplicativo do seu banco.<br/>A contribuição é facultativa.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="cultural-footer">
        <div>Benvenuti a Casa nostra & Bienvenidos a nuestra Vida</div>
        <div className="font-mono text-[10px] opacity-70">git commit -m "start forever together"</div>
      </footer>
    </div>
  );
}
