class QuickSort {

    //left is start index, right is end index;
    public void sort(int[] arr, int left, int right) {
        if(left >= right) {
            return;
        }
        int pi = partition(arr, left, right);
        //do recursively sort;  
        sort(arr, left, pi - 1);
        sort(arr, pi + 1, right);
        
    }

    public int partition(int[] arr, int left, int right) {
        //pick the right one as pivot;
        int pivot = arr[right];
        int FH = left;
        //the target is to move all smaller to pivot's left
        //greater move to pivot's right
        for(int i = left; i < right; i++) {
            if(arr[i] < pivot) {
            swap(arr, i, FH);
            FH++;
            }
        }
        //now the FH position is the correct position for pivot;
        swap(arr, FH, right);
        return FH;
    }

    public void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }


    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;
        QuickSort qs = new QuickSort();
        qs.sort(arr, 0, n - 1);
        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }
	
}
