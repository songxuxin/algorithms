class MergeSort {
  public void sort(int[] arr, int left, int right) {
    if(left >= right) {
      return;
    }
    int mid = left + (right - left) / 2;
    //do recursive sort, divide and conquer
    sort(arr, left, mid);
    sort(mid + 1, right);
    merge(arr, left, mid, right);
  }  

  public void merge(int[] arr, int left, int mid, int right) {
    //find size of two subarrays to be merged;
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int[] leftArr = new int[n1];
    int[] rightArr = new int[n2];

    //copy date to temp left and right arrays;
    for(int i = 0; i < n1; i++) {
      leftArr[i] = arr[left + i];
    }
    for(int i = 0; i < n2; i++) {
      rightArr[i] = arr[mid + 1 + i];
    }

    //merge the temp 2 arrays;
    int i = 0, j = 0;
    int k = left;

    while(i < n1 && j < n2) {
      if(leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
    while(i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
    while(j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
    
  }

  public static void main(String[] args) {
    int[] arr = {10, 7, 8, 9, 1, 5};
    MergeSort ms = new MergeSort();
    ms.sort(arr, 0, arr.length - 1);
    for(int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }
  
}

