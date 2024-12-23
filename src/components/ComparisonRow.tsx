import React from 'react';
import { Check, X } from 'lucide-react';
import type { ComparisonPoint } from '../data/comparisonData';

interface ComparisonRowProps {
  point: ComparisonPoint;
  isFirst: boolean;
}

export default function ComparisonRow({ point, isFirst }: ComparisonRowProps) {
  return (
    <div className={`grid grid-cols-2 gap-8 ${isFirst ? '' : 'mt-4'} items-center`}>
      <div className="flex items-center space-x-3 justify-center">
        <X className="h-6 w-6 text-red-500 flex-shrink-0" />
        <p className="text-sm text-gray-500">{point.limitation}</p>
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
        <p className="text-sm text-gray-700">{point.benefit}</p>
      </div>
    </div>
  );
}